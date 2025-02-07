async function generateReview() {
    const apiKey = "YOUR_DEEPSEEK_API_KEY"; // 替换为您的 DeepSeek API 密钥
    const prompt = "生成 20-100 字的小红书好评文案，突出生煎、小馄饨、牛肉粉丝汤和菜饭，使用表情符号（如🍴🥟），语言口语化。";

    try {
        const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "deepseek-chat",
                messages: [{ role: "user", content: prompt }],
                max_tokens: 100
            })
        });

        const data = await response.json();
        const review = data.choices[0].message.content;
        document.getElementById("output").value = review;
    } catch (error) {
        console.error("生成失败：", error);
        document.getElementById("output").value = "生成失败，请稍后重试！";
    }
}