# 切换到脚本所在目录
Set-Location $PSScriptRoot

# 获取当前目录下所有 .tex 文件
$files = Get-ChildItem -Path .\ -Filter *.tex
# 并行遍历所有 .tex 文件
$files | ForEach-Object -Parallel {
	# 获取文件对象
	$file = $_
	# 获取文件名
	$fileName = $file.Name
	# 获取文件名（不含扩展名）
	$fileNameWithoutExtension = $file.BaseName
	# 编译 .tex 文件
	xelatex $fileName
	# 将 .pdf 文件转换为 .svg 文件
	pdftocairo -svg "$fileNameWithoutExtension.pdf" "$fileNameWithoutExtension.svg"
    # 将 .svg 中的 :rgb(0%,0%,0%) 替换为 :var(--md-typeset-color)
    (Get-Content "$fileNameWithoutExtension.svg") -replace ":rgb\(0%,0%,0%\)", ":var(--md-typeset-color)" | Set-Content "$fileNameWithoutExtension.svg"
}