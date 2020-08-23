import glob
import re
import shutil

# index.htmlの削除
for filepath in glob.iglob('../../book/**/*.html', recursive=True):
    with open(filepath, encoding="utf8") as file:
        s = file.read()
    s = re.sub(r"(href\s*=\s*\".*?)index.html(.*?\")", "\\1\\2", s, 0)
    with open(filepath, "w", encoding="utf8") as file:
        file.write(s)

# 個別ページ用javascriptディレクトリのコピー
shutil.copytree('../../js-each/','../../book/html/js-each/')

#個別ページ用CSSディレクトリのコピー
shutil.copytree('../../css-each/','../../book/html/css-each/')


