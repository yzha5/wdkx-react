package main

import (
	"fmt"
	"io"
	"io/ioutil"
	"log"
	"os"
	"regexp"
	"strings"
)

func main() {
	path := "./src/icons"
	files, err := ioutil.ReadDir(path)
	if err != nil {
		log.Fatalln(err)
	}
	var svgFiles []string

	type source struct {
		Filename      string
		FilenameSnake string
		ExportName    string
	}
	var sources = make([]source, 0)

	for _, file := range files {
		if strings.Contains(file.Name(), ".svg") {
			fmt.Println("\033[0;33m==========", file.Name(), "==========\033[0m")
			svgFiles = append(svgFiles, file.Name())

			fObj, err := os.Open(path + "/" + file.Name())
			if err != nil {
				log.Fatalln(err)
			}
			defer fObj.Close()

			contentByte, err := ioutil.ReadAll(fObj)
			if err != nil {
				log.Fatalln(err)
			}
			svgContent := string(contentByte)

			//删除<svg></svg>
			reg := regexp.MustCompile(`<svg.*?>`)
			s := reg.FindAllString(svgContent, 1)
			content := strings.Replace(svgContent, s[0], "", 1)
			content = strings.Replace(content, "</svg>", "", 1)

			//替换颜色属性 fill="xxx" stroke="xxx"
			regFill := regexp.MustCompile(`fill="#.*?"`)
			ss := regFill.FindAllString(content, -1)
			for _, s1 := range ss {
				content = strings.Replace(content, s1, `fill={color}`, 1)
			}
			regStroke := regexp.MustCompile(`stroke="#.*?"`)
			ss2 := regStroke.FindAllString(content, -1)
			for _, s2 := range ss2 {
				content = strings.Replace(content, s2, `stroke={color}`, 1)
			}

			//替换中横线及把中横线后面那个字母变大写
			// fmt.Println([]byte("-"))//45
		loop:
			for {
				ri := strings.IndexRune(content, '-')
				if ri < 0 {
					break
				}
				//获取中横线后面那个字母
				target := string(content[ri+1])
				NewL := strings.ToUpper(target)
				content = strings.Replace(content, "-"+target, NewL, 1)
				goto loop
			}

			//导出名称
			exportName := strings.Replace(file.Name(), ".svg", "", 1) //settings.svg -> settings
			//大写第一个字母
			firstL := string(exportName[0])
			firstL = strings.ToUpper(firstL)
			newExportName := firstL + exportName[1:] //settings -> Settings

			sources = append(sources, source{
				Filename:      exportName,              //保存文件名
				FilenameSnake: snakeString(exportName), //保存蛇形的文件名
				ExportName:    newExportName,           //保存导出的名称
			})

			svg := `<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>` + content + `</svg>`
			cts:="import {SvgProps} from '../types'\n"+
			"export function "+newExportName+"({color = 'currentColor', size "+
			"= '100%'}:SvgProps) {\n"+
			"return ("+svg+")}"

			//写入文件
			//新的文件名
			newFileName := strings.Replace(file.Name(), ".svg", ".tsx", 1)
			newFileObj, err := os.OpenFile(path+"/"+newFileName, os.O_RDWR|os.O_CREATE|os.O_TRUNC, 0664)
			if err != nil {
				log.Fatalln(err)
			}
			defer newFileObj.Close()

			n, err := io.WriteString(newFileObj, cts)
			if err != nil {
				log.Fatalln(err)
			}
			fmt.Println("\033[0;32m写入文件成功\033[0m 体积：", n, "字节 【", newFileName, "】")

		}
	}

	//写入数据源文件
/* 
	sourceFileName := "./preview/icon-source.ts"
	sourceFileObj, err := os.OpenFile(sourceFileName, os.O_RDWR|os.O_CREATE|os.O_TRUNC, 0664)
	if err != nil {
		log.Fatalln(err)
	}
	defer sourceFileObj.Close()

	importContent := ""
	typeContent := ""
	varContent := ""

	for i, source := range sources {
		importContent += "import { " + source.ExportName + " } from '../src/icons/" + source.Filename + "'\n"

		if i+1 < len(sources) {
			typeContent += "'" + source.FilenameSnake + "'|\n"
		} else {
			typeContent += "'" + source.FilenameSnake + "'\n"
		}

		varContent += "'" + source.FilenameSnake + "':" + source.ExportName + ",\n"
	}
	sourceFileContent := importContent + "\nexport type IconName =\n" + typeContent + "\nexport const icons = {\n" + varContent + "\n}\n"

	n, err := io.WriteString(sourceFileObj, sourceFileContent)
	if err != nil {
		log.Fatalln(err)
	}
	fmt.Println("\033[0;32m写入 源 文件成功\033[0m 体积：", n, "字节 【", sourceFileName, "】")
 */
	
 
 	//写入索引文件

	sourceFileName := "./src/index.ts"
	sourceFileObj, err := os.OpenFile(sourceFileName, os.O_RDWR|os.O_CREATE|os.O_TRUNC, 0664)
	if err != nil {
		log.Fatalln(err)
	}
	defer sourceFileObj.Close()

	exportContent := ""

	for _, source := range sources {
		exportContent += "export { " + source.ExportName + " } from './icons/" + source.Filename + "'\n"
	}

	n, err := io.WriteString(sourceFileObj, exportContent)
	if err != nil {
		log.Fatalln(err)
	}
	fmt.Println("\033[0;32m写入 索引 文件成功\033[0m 体积：", n, "字节 【", sourceFileName, "】")
}

/**
 * 驼峰转蛇形 snake string
 * @description XxYy to xx-yy , XxYY to xx-y-y
 * @date 2020/7/30
 * @param s 需要转换的字符串
 * @return string
 **/
func snakeString(s string) string {
	data := make([]byte, 0, len(s)*2)
	j := false
	num := len(s)
	for i := 0; i < num; i++ {
		d := s[i]
		// or通过ASCII码进行大小写的转化
		// 65-90（A-Z），97-122（a-z）
		//判断如果字母为大写的A-Z就在前面拼接一个_
		if i > 0 && d >= 'A' && d <= 'Z' && j {
			data = append(data, '-')
		}
		if d != '-' {
			j = true
		}
		data = append(data, d)
	}
	//ToLower把大写字母统一转小写
	return strings.ToLower(string(data[:]))
}
