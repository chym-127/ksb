import sys
from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageOps
import requests
import numpy as np

# 绘制文字
page_size = 50
y_offset = 40
w_offset = 10
font_size = 36
simhei = "C:\\Windows\\Fonts\\simhei.ttf"
d_font = ImageFont.truetype(simhei, font_size)
# 获取第一个有效字符


def get_first_char(items):
    for i in items:
        primary_font_path = f"C:\\Users\\chym\\Downloads\\{i['special_font']}.ttf"
        t_font = ImageFont.truetype(primary_font_path, font_size)
        first_char = ""
        symbols = []
        i['question'] = i['question'].replace(" ", "")
        for char in i['question']:
            try:
                if t_font.getmask(char).getbbox():
                    first_char = char
                    symbols.append(0)
                else:
                    symbols.append(1)
            except Exception as e:
                pass
        i['symbols'] = symbols
        i['first_char'] = first_char
    return items


def get_max_text_width(items):
    image = Image.new("RGB", (1500, 1500), (255, 255, 255))
    draw = ImageDraw.Draw(image)
    max_w = 0
    y = 0
    for i in items:
        primary_font_path = f"C:\\Users\\chym\\Downloads\\{i['special_font']}.ttf"
        t_font = ImageFont.truetype(primary_font_path, font_size)
        x = 0
        if i['first_char'] == "":
            y += font_size+y_offset
            continue
        for char in i['question']:
            font = t_font
            try:
                if t_font.getmask(char).getbbox():
                    pass
                else:
                    font = d_font
                    char = i['first_char'] or "题"
            except Exception:
                font = d_font
                char = i['first_char'] or "题"
                pass
            w = draw.textlength(
                char, font=font, font_size=font_size) + w_offset
            x += w
        max_w = max(max_w, x)
        y += font_size+y_offset
    return [int(max_w)+1, y]


def draw_text(position, draw, item):
    primary_font_path = f"C:\\Users\\chym\\Downloads\\{item['special_font']}.ttf"
    t_font = ImageFont.truetype(primary_font_path, font_size)
    x, y = position
    text = item['question']
    # 题干是对的
    # if item['first_char'] == "":
    #     draw.text((x, y), text, font=d_font, fill=(0, 0, 0))
    #     return
    for char in text:
        font = t_font
        try:
            if t_font.getmask(char).getbbox():
                pass
            else:
                char = item['first_char']
        except Exception:
            char = item['first_char']
            pass
        if char == "":
            char = "题"
            font = d_font
        # 绘制字符
        draw.text((x, y), char, font=font, fill=(0, 0, 0))
        # 移动 x 位置到下一个字符
        w = draw.textlength(char, font=font, font_size=font_size) + w_offset
        x += w


def draw_texts(draw, items):
    x, y = (0, 0)
    for i in items:
        draw_text((0, y), draw, i)
        y += font_size+y_offset


def update_ques_name(arr):
    data = {"items": arr}
    resp = requests.post(
        "http://localhost:8848/batch/question/update/real_name", json=data)


def http_list_ques(page_num):
    data = {"page_num": page_num, "page_size": page_size}
    resp = requests.post(
        "http://localhost:8848/question/list/no_real_name", json=data)
    return resp.json()


def draw(items):
    rect = get_max_text_width(items)
    image = Image.new("RGB", rect, (255, 255, 255))
    draw = ImageDraw.Draw(image)
    draw_texts(draw, items)
    image = ImageOps.invert(image)  # 反色（如果背景白色）
    image.save("output.png")


def easyocr_group_by_line(image_path, lang_list=['ch_sim', 'en'], y_threshold=10):
    import easyocr
    """
    使用 EasyOCR 识别图像，并按行分组文字
    参数：
        image_path: 图片路径
        lang_list: OCR 语言列表
        y_threshold: 判断同一行的 y 坐标阈值
    返回：
        lines_texts: 每行文本组成的列表
    """

    reader = easyocr.Reader(lang_list)
    result = reader.readtext(image_path)

    lines = []

    for bbox, text, conf in result:
        # 计算文字块中心 y 坐标
        y_center = np.mean([point[1] for point in bbox])
        # 尝试插入已有行
        inserted = False
        for line in lines:
            if abs(line['y'] - y_center) < y_threshold:
                line['texts'].append((bbox, text, conf))
                inserted = True
                break
        if not inserted:
            lines.append({'y': y_center, 'texts': [(bbox, text, conf)]})

    # 按 y 坐标排序行
    lines = sorted(lines, key=lambda x: x['y'])

    lines_texts = []
    for line in lines:
        # 行内按 x 坐标排序
        sorted_texts = sorted(
            line['texts'], key=lambda x: x[0][0][0])  # 左上角 x 坐标
        line_str = ''.join([t[1] for t in sorted_texts])
        lines_texts.append(line_str)

    return lines_texts


def gen_real_name(items, real_names):
    idx = 0
    results = []
    for item in items:
        idx1 = 0
        real_name = ""
        for symbol in item['symbols']:
            if symbol == 0:
                real_name += real_names[idx][idx1]
            else:
                real_name += item["question"][idx1]
            idx1 += 1
        idx += 1
        results.append({
            "id": item['id'],
            "real": real_name,
            "original": item['question']
        })
    return results


if __name__ == "__main__":
    count = 1
    while True:
        print(f"第{count}次")
        resp = http_list_ques(1)
        items = resp['data']["items"]
        if (len(items) <= 0):
            sys.exit(0)
        print(f"共请求到{len(items)}个数据,开始解密")
        items = get_first_char(items)
        print(f"正在绘制图片")
        draw(items)
        print(f"OCR识别中")
        txts = easyocr_group_by_line("output.png")
        print(f"解密文字中")
        results = gen_real_name(items, txts)
        print(f"解密成功")
        update_ques_name(results)
        count += 1
        sys.exit(0)
