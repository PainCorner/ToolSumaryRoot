function funcTool() {
    // ツールデータをJSONファイルから読み込む
    fetch("../json/data.json")
        .then(response => response.json())
        .then(data => {
            const table = document.getElementById("toolTable");
            data.tools.forEach(tool => {
                const row = table.getElementsByTagName("tbody")[0].insertRow(-1);
                const toolNameCell = row.insertCell(0);
                const classificationCell = row.insertCell(1);
                const tFunctionCell = row.insertCell(2);
                const noteCell = row.insertCell(3);

                // toolName をアンカーリンクに変換
                const toolNameLink = document.createElement("a");
                toolNameLink.target = "_blank";
                toolNameLink.href = tool.toolurl; // リンク先のURLを設定
                toolNameLink.textContent = tool.toolName;
                toolNameCell.appendChild(toolNameLink);

                classificationCell.textContent = tool.classification;
                tFunctionCell.textContent = tool.tFunction;
                noteCell.textContent = tool.note;
            });
        });
}

funcTool();