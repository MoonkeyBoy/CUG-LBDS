![Yeap china](https://github.com/MoonkeyBoy/SongLab/blob/master/img/chinese.svg)![Yeap awesome](https://github.com/MoonkeyBoy/SongLab/blob/master/img/awesome.svg)

# SongLabSecurity

[English](README.md) | [中文](README-zh.md)

## 一、简介
   本网站主要用于中国地质大学（武汉）计算机学院 大数据安全与智能处理实验室的宣传，以更好的同外界科研人员、在线师生共同交流。为方便实验室网站管理，提高网站更新、维护等工作的效率，本网站使用Github作为代码管理仓库，需要更新网站内容的同学，可根据需要fork网站代码后，提出pull requests请求，实验室维护人员会根据具体情况对请求进行答复。

----------
## 二、使用说明
 1. 为规范化网站样式，后期创建网站新文件时，请复制`/demo/demo.html`文件，并重命名为自己需要的文件名称，新内容请在文件`“中部主体”`处添加。

    ```
    ...
    <!--中部主体-->
        <p>···请在此处写上你的代码！···</p>
    <!--中部主体 over-->
    ...
    ```

 2. 上述步骤完成后，请在`/head.html`文件中添加上述文件的相对路径。如果需要在其他文件中添加跳转链接，记得同步修改（例如：个人简介需在`/Stu_Master.html`文件中添加跳转链接）
 3. 提交pull requests请求时，请讲文件放置与正确文件夹下，方便后期管理。
## 三、文件说明

 1. `/teacher`文件夹统一存放所有老师的个人网页，网站入口：教师信息-老师个人。
 2. `/student`文件夹统一存放所有学生的个人网页，网站入口：人才培养-研究生-学生个人。
 3. `/fig`文件夹统一存放需要的图片，可单独新建文件夹。
