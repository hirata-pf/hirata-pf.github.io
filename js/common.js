(function() {
    // パスワードをそのまま書かず、簡単な計算や変換を挟むと「検索」に引っかかりにくくなります
    const _0x1a2b = "hirarta2026pf"; 
    
    const userInput = prompt("【Hirata Daiki Portfolio】\n閲覧パスワードを入力してください");

    if (userInput !== _0x1a2b) {
        alert("認証に失敗しました。");
        // 画面を真っ白にしてから、白紙ページへ飛ばす
        document.documentElement.innerHTML = "";
        window.location.replace("about:blank");
    }
})();