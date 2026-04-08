## python 脚本初始化说明

.venv 文件夹是 Python 的虚拟环境你需要使用如下进行环境初始化：

```bash
python -m venv .venv
```

之后输入这个命令，激活环境：

```bash
.\.venv\Scripts\activate
```

激活环境后运行，安装依赖：

```bash
pip install requests beautifulsoup4 markdownify lxml
```

## 运行脚本

在激活环境下，输入：

```bash
python htmlContentGet.py Link.md --output-dir ./output
```

等待生成原始网站 md 数据即可！