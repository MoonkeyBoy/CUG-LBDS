window.addEventListener("load", initialize);
var id = 0;

function initialize()
{
	document.getElementById('Hackindex').innerHTML = "<div id=\"console\"></div>";
	delayed_type("Hello world & Hi~~", 50, take_input);

    $(".headerpage").load("../head.html");
    $(".footerpage").load("../footer.html");
}
function delayed_type(text, delay, callback)
{
	var j=0;
	function type()
	{
		if(j<text.length)
		{
			document.getElementById('console').innerHTML += text[j];
			j++;
			setTimeout(type, delay);
		}
		else
		{
			console.log("else me gya\n");
			document.getElementById('console').innerHTML += "<br>";
			callback();
		}
	}
	type();
}

function take_input()
{
	console.log("id = "+id+"\n");
	document.getElementById('console').innerHTML += "> ";
	document.getElementById('console').innerHTML += "<input type=\"text\" id=\""+id+"\" maxlength=\"20\" />";
	document.getElementById(id).focus();
	document.getElementById(id).onkeypress = function(event){
	    if (event.keyCode == 13 || event.which == 13){
	    	var input = document.getElementById(id).value;
	    	document.getElementById(id).remove();
	    	document.getElementById('console').innerHTML += input+"<br>";
	    	id++;
	        process_input(input);
	    }
	};
}

function process_input(input)
{
	console.log("input = "+input+"\n");
	if(input == "help")
	{
		document.getElementById('console').innerHTML += "Try one of these commands :<br>";
		arr = new Array("<span class=\"highlight\">about<br></span>",
            "<span class=\"highlight\">competitions<br></span>",
            "<span class=\"highlight\">contact<br></span>",
            "<span class=\"highlight\">clear</span>");
		delayed_type(arr, 200, take_input);
	}
	else if(input == "about")
	{
		var about = "Song & Yang Lab:<br>";
		about+="Nice to meet you!<br>"
		about+="<br>"
		document.getElementById('console').innerHTML += "<span class=\"text\">"+about+"</span>";
		take_input();
	}
	else if(input == "competitions")
	{
		var competitions1 = "We are focusing on the following competitions:" +
            "<ul>";

		var competitions2 = "<li>\n" +
            "                <a href=\"https://www.comap.com/\" style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:2\">美国大学生数学建模竞赛</a>\n" +
            "                <ul >\n" +
            "                    <li style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:2\">美国大学生数学建模竞赛（MCM/ICM）由美国数学及其应用联合会主办，是唯一的国际性数学建模竞赛，也是世界范围内最具影响力的数学建模竞赛;</li>\n" +
            "                    <li style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:2\">比赛时间:大致为每年的1月底-2月初;</li>\n" +
            "                </ul>\n" +
            "            </li>";

		var competitions3 = "<li>\n" +
            "                <a href=\"http://www.ciscn.cn/\" style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:2\">全国大学生信息安全竞赛</a>\n" +
            "                <ul>\n" +
            "                    <li style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:2\">指导单位：中央网信办网络安全协调局教育部高教司共青团中央学校部</li>\n" +
            "                    <li style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:2\">主办单位：教育部高等学校信息安全专业教学指导委员会</li>\n" +
            "                    <li style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:2\">比赛时间：大致为每年的7月底-8月初</li>\n" +
            "                </ul>\n" +
            "            </li>";

		var competitions4 = "  <li>\n" +
            "                <a href=\"//http://www.apmcm.org/\" style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:2\">亚太地区大学生数学建模竞赛:</a>\n" +
            "                <ul>\n" +
            "                    <li style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:2\">主办单位：北京图象图形学学会、亚太地区大学生数学建模竞赛组委会 承办单位：校苑数模;</li>\n" +
            "                    <li style=\"font-size: 18px;font-family: 'Kaiti SC';line-height:2\">比赛时间：大致为每年的11月底-12月初</li>\n" +
            "                </ul>\n" +
            "            </li>" +
            "</ul>";

		arr = new Array(competitions1, competitions2, competitions3, competitions4);
		delayed_type(arr, 500, take_input);
	}
	else if(input == "contact")
	{
		var phone = "<span class=\"highlight\">Phone: </span>";
		phone += "<span class=\"text\"><br></span>";

		var mail = "<span class=\"highlight\">E-mail: </span>";
		mail += "<span class=\"text\">Jun song:songjun@cug.edu.cn<br>&emsp;&emsp;&emsp;&emsp;&emsp;Fan yang:12331086@qq.com<br></span>";

		var address = "<span class=\"highlight\">Address: </span>";
		address += "<span class=\"text\">Location: School of computer science, China University of Geosciences (Wuhan), No. 68, Jincheng Street, Donghu New Technology Development Zone, Wuhan, Hubei Province,China<br></span>";

		arr = new Array(phone, mail, address);
		delayed_type(arr, 500, take_input);
	}
	else if(input == "clear")
	{
		initialize();
	}
	else
	{
		document.getElementById('console').innerHTML += "<span class=\"error\">Error: Command \""+input+"\" not found. Try \"help\"</span><br>";
		take_input();
	}
}

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}
