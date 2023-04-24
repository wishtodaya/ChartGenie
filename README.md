# ChartGenie(图表精灵)
>自然语言描述生成图表

## 项目简介
本项目利用ChatGPT解析用户的自然语言输入，将其转换为ECharts图表，呈现给用户。

[在线体验地址](http://23.234.233.76:3000/)

## 安装说明
1.首先，克隆该项目的存储库：
```
git clone https://github.com/wishtodaya/ChartGenie.git
cd ChartGenie
```
2.然后，安装项目依赖：
```
npm install
```
3.配置api key
在项目的根目录创建.env文件，文件内容为：

```
OPENAI_API_KEY=这里输入你的key
```

4.使用说明
要启动项目，请运行以下命令：
```
npm start
```
此命令将启动Express.js服务器，并在浏览器中打开应用。


## 示例

以下是一些自然语言输入示例，可以用于生成ECharts图表：
1.创建一个折线图，横坐标['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']，纵坐标 [150, 230, 224, 218, 135, 147, 260]
2.创建一个雷达图，数据 [4200, 3000, 20000, 35000, 50000, 18000]，指示[Sales，Administration，Information Technology，Customer Support，Development,Marketing]
3.创建一个K线图，横坐标 ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']，纵坐标[[20, 34, 10, 38],[40, 35, 30, 50],[31, 38, 33, 44],[38, 15, 5, 42]]

## 许可证
本项目采用MIT许可证。请查看LICENSE文件以获取更多信息。

## 贡献指南
我们欢迎您为项目做出贡献！请先阅读CONTRIBUTING.md以了解如何开始。在提交拉取请求之前，请确保遵循项目的代码风格和贡献指南。

## 致谢
我们要感谢所有为本项目做出贡献的人。如果您在使用过程中遇到问题或需要帮助，请随时通过提交问题或联系我们的支持团队来寻求帮助。