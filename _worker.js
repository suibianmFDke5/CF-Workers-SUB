
// 部署完成后在网址后面加上这个，获取自建节点和机场聚合节点，/?token=auto或/auto或

let mytoken = '25a77abd-ce72-4d6c-8297-d063a9645091'; //可以随便取，或者uuid生成，https://1024tools.com/uuid
let BotToken =''; //可以为空，或者@BotFather中输入/start，/newbot，并关注机器人
let ChatID =''; //可以为空，或者@userinfobot中获取，/start
let TG = 0; //小白勿动， 开发者专用，1 为推送所有的访问信息，0 为不推送订阅转换后端的访问信息与异常访问
let FileName = 'kuailian VPN';
let SUBUpdateTime = 6; //自定义订阅更新时间，单位小时
let total = 999;//PB
let timestamp = 4102329600000;//2099-12-31

//节点链接 + 订阅链接
let MainData = `
hysteria2://1e7209b2-adfb-46b2-b06c-04c5e69dd625@129.153.75.202:443/?insecure=1&sni=www.bing.com#🇺🇸US1
hysteria2://1e7209b2-adfb-46b2-b06c-04c5e69dd625@129.153.80.156:443/?insecure=1&sni=www.bing.com#🇺🇸US2
hysteria2://1e7209b2-adfb-46b2-b06c-04c5e69dd625@158.101.37.59:443/?insecure=1&sni=www.bing.com#🇺🇸US3
hysteria2://1e7209b2-adfb-46b2-b06c-04c5e69dd625@129.146.249.162:443/?insecure=1&sni=www.bing.com#🇺🇸US4
hysteria2://1e7209b2-adfb-46b2-b06c-04c5e69dd625@205.178.183.33:443/?insecure=1&sni=www.microsoft.com#🇯🇵JP01
hysteria2://1e7209b2-adfb-46b2-b06c-04c5e69dd625@205.178.183.164:443/?insecure=1&sni=www.microsoft.com#🇸🇬SG01-gpt
hysteria2://1e7209b2-adfb-46b2-b06c-04c5e69dd625@62.210.71.30:443/?insecure=1&sni=www.microsoft.com#🇫🇷FR
hysteria2://1e7209b2-adfb-46b2-b06c-04c5e69dd625@129.151.193.163:443/?insecure=1&sni=www.microsoft.com#🇸🇪SE
hysteria2://1e7209b2-adfb-46b2-b06c-04c5e69dd625@138.2.179.192:443/?insecure=1&sni=www.bing.com#🇩🇪DE01
hysteria2://1e7209b2-adfb-46b2-b06c-04c5e69dd625@152.70.176.68:443/?insecure=1&sni=www.bing.com#🇩🇪DE02
hysteria2://1e7209b2-adfb-46b2-b06c-04c5e69dd625@168.75.85.171:443/?insecure=1&sni=www.microsoft.com#🇧🇷BR
hysteria2://1e7209b2-adfb-46b2-b06c-04c5e69dd625@207.211.179.132:443/?insecure=1&sni=www.bing.com#🇺🇸US04
hysteria2://1e7209b2-adfb-46b2-b06c-04c5e69dd625@139.185.32.100:443/?insecure=1&sni=www.hoyoverse.com#🇦🇪AE01
hysteria2://1e7209b2-adfb-46b2-b06c-04c5e69dd625@139.185.34.29:443/?insecure=1&sni=www.hoyoverse.com#🇦🇪AE02
hysteria2://1e7209b2-adfb-46b2-b06c-04c5e69dd625@146.56.114.61:443/?insecure=1&sni=www.hoyoverse.com#🇰🇷KR01
hysteria2://1e7209b2-adfb-46b2-b06c-04c5e69dd625@158.180.71.143:443/?insecure=1&sni=www.hoyoverse.com#🇰🇷KR02
hysteria2://1e7209b2-adfb-46b2-b06c-04c5e69dd625@192.9.186.104:443/?insecure=1&sni=www.hoyoverse.com#🇦🇺AU01
hysteria2://1e7209b2-adfb-46b2-b06c-04c5e69dd625@152.69.186.200:443/?insecure=1&sni=www.hoyoverse.com#🇦🇺AU02
hysteria2://1e7209b2-adfb-46b2-b06c-04c5e69dd625@144.24.99.141:443/?insecure=1&sni=www.hoyoverse.com#🇮🇳IN01
hysteria2://1e7209b2-adfb-46b2-b06c-04c5e69dd625@144.24.146.216:443/?insecure=1&sni=www.hoyoverse.com#🇮🇳IN02
hysteria2://1e7209b2-adfb-46b2-b06c-04c5e69dd625@132.145.52.10:443/?insecure=1&sni=www.microsoft.com#🇬🇧GB01
hysteria2://1e7209b2-adfb-46b2-b06c-04c5e69dd625@132.145.28.17:443/?insecure=1&sni=www.microsoft.com#🇬🇧GB02
hysteria2://1e7209b2-adfb-46b2-b06c-04c5e69dd625@129.151.169.64:443/?insecure=1&sni=www.microsoft.com#🇿🇦ZA
vless://1e7209b2-adfb-46b2-b06c-04c5e69dd625@77.75.199.163:443?encryption=none&security=tls&fp=chrome&type=ws&host=djjchk1.djjc.sbs&path=%2Fdjjc%2Fhk1#%F0%9F%87%AD%F0%9F%87%B0%E9%A6%99%E6%B8%AF1%E5%8F%B7-0.1%E5%80%8D
vless://1e7209b2-adfb-46b2-b06c-04c5e69dd625@77.75.199.163:443?encryption=none&security=tls&fp=chrome&type=ws&host=djjchk1.djjc.sbs&path=%2Fdjjc%2Fhk1#%F0%9F%87%AD%F0%9F%87%B0%E9%A6%99%E6%B8%AF2%E5%8F%B7-0.1%E5%80%8D
vless://1e7209b2-adfb-46b2-b06c-04c5e69dd625@152.67.219.54:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=a9e9-de2f1o2.xn--4gq62f52gopi49k.com&fp=chrome&type=tcp&headerType=none#%F0%9F%87%B0%F0%9F%87%B7%E9%9F%A9%E5%9B%BD%E6%98%A5%E5%B7%9D-1%E5%80%8D
vless://1e7209b2-adfb-46b2-b06c-04c5e69dd625@178.173.236.233:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=djdownloadhk.xn--4gq62f52gopi49k.com&fp=safari&type=tcp&headerType=none#%F0%9F%87%AD%F0%9F%87%B0%E9%A6%99%E6%B8%AF-1%E5%80%8D
vless://1e7209b2-adfb-46b2-b06c-04c5e69dd625@5.104.107.143:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=a9e9-db2f1e2.xn--4gq62f52gopi49k.com&fp=chrome&type=tcp&headerType=none#%F0%9F%87%A9%F0%9F%87%AA%E5%BE%B7%E5%9B%BD-1%E5%80%8D
vless://1e7209b2-adfb-46b2-b06c-04c5e69dd625@77.75.199.163:443?encryption=none&security=tls&sni=k12us1.djjc.sbs&fp=safari&type=ws&host=k12us1.djjc.sbs&path=%2Fdjjc%2Fus1#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD1%E5%8F%B7-0.1%E5%80%8D
vless://1e7209b2-adfb-46b2-b06c-04c5e69dd625@77.75.199.163:443?encryption=none&security=tls&sni=k4us2.djjc.sbs&fp=ios&type=ws&host=k4us2.djjc.sbs&path=%2Fdjjc%2Fus2#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD2%E5%8F%B7-0.1%E5%80%8D
vless://1e7209b2-adfb-46b2-b06c-04c5e69dd625@77.75.199.163:443?encryption=none&security=tls&sni=k11us3.djjc.sbs&fp=ios&type=ws&host=k11us3.djjc.sbs&path=%2Fdjjc%2Fus3#%F0%9F%87%BA%F0%9F%87%B8%E7%BE%8E%E5%9B%BD3%E5%8F%B7-0.1%E5%80%8D
vless://1e7209b2-adfb-46b2-b06c-04c5e69dd625@77.75.199.163:443?encryption=none&security=tls&sni=k5jp1.djjc.sbs&fp=safari&type=ws&host=k5jp1.djjc.sbs&path=%2Fdjjc%2Fjp1#%F0%9F%87%AF%F0%9F%87%B5%E6%97%A5%E6%9C%AC-0.1%E2%80%94%E6%B5%81%E5%AA%92%E4%BD%93
vless://1e7209b2-adfb-46b2-b06c-04c5e69dd625@77.75.199.163:443?encryption=none&security=tls&sni=k10sg1.djjc.sbs&fp=safari&type=ws&host=k10sg1.djjc.sbs&path=%2Fdjjc%2Fsg1#%F0%9F%87%B8%F0%9F%87%AC%E6%96%B0%E5%8A%A0%E5%9D%A1-0.1%E2%80%94%E5%A5%88%E9%A3%9E
vless://1e7209b2-adfb-46b2-b06c-04c5e69dd625@77.75.199.163:443?encryption=none&security=tls&sni=k2fr1.djjc.sbs&fp=ios&type=ws&host=k2fr1.djjc.sbs&path=%2Fdjjc%2Ffr1#%F0%9F%87%AB%F0%9F%87%B7%E6%B3%95%E5%9B%BD
vless://1e7209b2-adfb-46b2-b06c-04c5e69dd625@77.75.199.163:443?encryption=none&security=tls&sni=kfr2.djjc.sbs&fp=safari&type=ws&host=kfr2.djjc.sbs&path=%2Fdjjc%2Ffr2#%F0%9F%87%AB%F0%9F%87%B7%E6%B3%95%E5%9B%BD2
vless://1e7209b2-adfb-46b2-b06c-04c5e69dd625@77.75.199.163:443?encryption=none&security=tls&sni=k10de1.djjc.sbs&fp=ios&type=ws&host=k10de1.djjc.sbs&path=%2Fdjjc%2Fde1#%F0%9F%87%A9%F0%9F%87%AA%E5%BE%B7%E5%9B%BD-gpt
vless://1e7209b2-adfb-46b2-b06c-04c5e69dd625@c8217-b2a.h1.49d2.5e11.613.b297.djjsvip.cfd:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=djdownloadtw1.xn--4gq62f52gopi49k.com&fp=safari&type=tcp&headerType=none#%F0%9F%87%B9%F0%9F%87%BC%E5%8F%B0%E6%B9%BE%E2%80%94TK%E4%B8%93%E7%BA%BF
vless://1e7209b2-adfb-46b2-b06c-04c5e69dd625@c8217-b2a.h2.49d2.5e11.613.b297.djjsvip.cfd:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=djdownloadhk1.xn--4gq62f52gopi49k.com&fp=safari&type=tcp&headerType=none#%F0%9F%87%AD%F0%9F%87%B0%E9%A6%99%E6%B8%AFhkt-2%E5%80%8D%E7%8E%87
vless://1e7209b2-adfb-46b2-b06c-04c5e69dd625@c8217-b2a.h3.49d2.5e11.613.b297.djjsvip.cfd:443?encryption=none&flow=xtls-rprx-vision&security=tls&sni=djdownloadhk2.xn--4gq62f52gopi49k.com&fp=safari&type=tcp&headerType=none#%F0%9F%87%AD%F0%9F%87%B0%E9%A6%99%E6%B8%AFhkt2-1.8%E5%80%8D%E7%8E%87


`

let urls = [];
let subconverter = "apiurl.v1.mk"; //在线订阅转换后端，目前使用肥羊的订阅转换功能。支持自建psub 可自行搭建https://github.com/bulianglin/psub
let subconfig = "https://raw.githubusercontent.com/suibianmFDke5/edgetunnel/main/Clash/config/ACL4SSR_Online_Full_NoKer.ini?token=GHSAT0AAAAAACQBCZ5K2EISVDFHXEFK3BMUZQAACQA"; //订阅配置文件

export default {
	async fetch (request,env) {
		const userAgentHeader = request.headers.get('User-Agent');
		const userAgent = userAgentHeader ? userAgentHeader.toLowerCase() : "null";
		const url = new URL(request.url);
		const token = url.searchParams.get('token');
		mytoken = env.TOKEN || mytoken;
		BotToken = env.TGTOKEN || BotToken;
		ChatID = env.TGID || ChatID; 
		TG =  env.TG || TG; 
		subconverter = env.SUBAPI || subconverter;
		subconfig = env.SUBCONFIG || subconfig;
		FileName = env.SUBNAME || FileName;
		MainData = env.LINK || MainData;
		if(env.LINKSUB) urls = await ADD(env.LINKSUB);

		const currentDate = new Date();
		currentDate.setHours(0, 0, 0, 0); 
		const timeTemp = Math.ceil(currentDate.getTime() / 1000);
		const fakeToken = await MD5MD5(`${mytoken}${timeTemp}`);
		//console.log(`${fakeUserID}\n${fakeHostName}`); // 打印fakeID

		let UD = Math.floor(((timestamp - Date.now())/timestamp * 99 * 1099511627776 * 1024)/2);
		total = total * 1099511627776 * 1024;
		let expire= Math.floor(timestamp / 1000) ;
		SUBUpdateTime = env.SUBUPTIME || SUBUpdateTime;

		let 重新汇总所有链接 = await ADD(MainData + '\n' + urls.join('\n'));
		let 自建节点 ="";
		let 订阅链接 ="";
		for (let x of 重新汇总所有链接) {
			if (x.toLowerCase().startsWith('http')) {
				订阅链接 += x + '\n';
			} else {
				自建节点 += x + '\n';
			}
		}
		MainData = 自建节点;
		urls = await ADD(订阅链接);

		if ( !(token == mytoken || token == fakeToken || url.pathname == ("/"+ mytoken) || url.pathname.includes("/"+ mytoken + "?")) ) {
			if ( TG == 1 && url.pathname !== "/" && url.pathname !== "/favicon.ico" ) await sendMessage(`#异常访问 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgent}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			const envKey = env.URL302 ? 'URL302' : (env.URL ? 'URL' : null);
			if (envKey) {
				const URLs = await ADD(env[envKey]);
				const URL = URLs[Math.floor(Math.random() * URLs.length)];
				return envKey === 'URL302' ? Response.redirect(URL, 302) : fetch(new Request(URL, request));
			}
			return new Response(await nginx(), { 
				status: 200 ,
				headers: {
					'Content-Type': 'text/html; charset=UTF-8',
				},
			});
		} else {
			await sendMessage(`#获取订阅 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			let 订阅格式 = 'base64';
			if (userAgent.includes('null') || userAgent.includes('subconverter') || userAgent.includes('nekobox') || userAgent.includes(('CF-Workers-SUB').toLowerCase())){
				订阅格式 = 'base64';
			} else if (userAgent.includes('clash') || ( url.searchParams.has('clash') && !userAgent.includes('subconverter'))){
				订阅格式 = 'clash';
			} else if (userAgent.includes('sing-box') || userAgent.includes('singbox') || ( (url.searchParams.has('sb') || url.searchParams.has('singbox')) && !userAgent.includes('subconverter'))){
				订阅格式 = 'singbox';
			}

			let subconverterUrl ;
			let 订阅转换URL = `${url.origin}/${await MD5MD5(fakeToken)}?token=${fakeToken}`;
			//console.log(订阅转换URL);
			let req_data = MainData;
			// 创建一个AbortController对象，用于控制fetch请求的取消
			const controller = new AbortController();
	
			const timeout = setTimeout(() => {
				controller.abort(); // 取消所有请求
			}, 1618); // 1.618秒后触发
	
			try {
				const responses = await Promise.allSettled(urls.map(url =>
					fetch(url, {
						method: 'get',
						headers: {
							'Accept': 'text/html,application/xhtml+xml,application/xml;',
							'User-Agent': `v2rayn cmliu/CF-Workers-SUB ${userAgentHeader}`
						},
						signal: controller.signal // 将AbortController的信号量添加到fetch请求中，以便于需要时可以取消请求
					}).then(response => {
						if (response.ok) {
							return response.text().then(content => {
								// 这里可以顺便做内容检查
								if (content.includes('dns') && content.includes('proxies') && content.includes('proxy-groups') && content.includes('rules')) {
									//console.log("clashsub: " + url);
									订阅转换URL += "|" + url;
								} else if  (content.includes('dns') && content.includes('outbounds') && content.includes('inbounds')){
									//console.log("singboxsub: " + url);
									订阅转换URL += "|" + url;
								} else {
									return content; // 保证链式调用中的下一个then可以接收到文本内容
								}
							});
						} else {
							return ""; // 如果response.ok为false，返回空字符串
						}
					})
				));	
				//console.log(responses);
				for (const response of responses) {
					if (response.status === 'fulfilled') {
						const content = await response.value;
						req_data += base64Decode(content) + '\n';
					}
				}

			} catch (error) {
				//console.error(error);
			} finally {
				// 无论成功或失败，最后都清除设置的超时定时器
				clearTimeout(timeout);
			}

			//修复中文错误
			const utf8Encoder = new TextEncoder();
			const encodedData = utf8Encoder.encode(req_data);
			const text = String.fromCharCode.apply(null, encodedData);
			
			//去重
			const uniqueLines = new Set(text.split('\n'));
			const result = [...uniqueLines].join('\n');
			console.log(result);
			const base64Data = btoa(result);

			if (订阅格式 == 'base64'){
				return new Response(base64Data ,{
					headers: { 
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
					}
				});
			} else if (订阅格式 == 'clash'){
				subconverterUrl = `https://${subconverter}/sub?target=clash&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'singbox'){
				subconverterUrl = `https://${subconverter}/sub?target=singbox&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			}

			try {
				const subconverterResponse = await fetch(subconverterUrl);
				
				if (!subconverterResponse.ok) {
					return new Response(base64Data ,{
						headers: { 
							"content-type": "text/plain; charset=utf-8",
							"Profile-Update-Interval": `${SUBUpdateTime}`,
							"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
						}
					});
					//throw new Error(`Error fetching subconverterUrl: ${subconverterResponse.status} ${subconverterResponse.statusText}`);
				}
				let subconverterContent = await subconverterResponse.text();
	
				return new Response(subconverterContent, {
					headers: { 
						"Content-Disposition": `attachment; filename*=utf-8''${encodeURIComponent(FileName)}; filename=${FileName}`,
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,

					},
				});
			} catch (error) {
				return new Response(base64Data ,{
					headers: { 
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
					}
				});
			}
		}
	}
};

async function ADD(envadd) {
	var addtext = envadd.replace(/[	"'|\r\n]+/g, ',').replace(/,+/g, ',');  // 将空格、双引号、单引号和换行符替换为逗号
	//console.log(addtext);
	if (addtext.charAt(0) == ',') addtext = addtext.slice(1);
	if (addtext.charAt(addtext.length -1) == ',') addtext = addtext.slice(0, addtext.length - 1);
	const add = addtext.split(',');
	//console.log(add);
	return add ;
}

async function nginx() {
	const text = `
	<!DOCTYPE html>
	<html>
	<head>
	<title>Welcome to nginx!</title>
	<style>
		body {
			width: 35em;
			margin: 0 auto;
			font-family: Tahoma, Verdana, Arial, sans-serif;
		}
	</style>
	</head>
	<body>
	<h1>Welcome to nginx!</h1>
	<p>If you see this page, the nginx web server is successfully installed and
	working. Further configuration is required.</p>
	
	<p>For online documentation and support please refer to
	<a href="http://nginx.org/">nginx.org</a>.<br/>
	Commercial support is available at
	<a href="http://nginx.com/">nginx.com</a>.</p>
	
	<p><em>Thank you for using nginx.</em></p>
	</body>
	</html>
	`
	return text ;
}

async function sendMessage(type, ip, add_data = "") {
	if ( BotToken !== '' && ChatID !== ''){
		let msg = "";
		const response = await fetch(`http://ip-api.com/json/${ip}?lang=zh-CN`);
		if (response.status == 200) {
			const ipInfo = await response.json();
			msg = `${type}\nIP: ${ip}\n国家: ${ipInfo.country}\n<tg-spoiler>城市: ${ipInfo.city}\n组织: ${ipInfo.org}\nASN: ${ipInfo.as}\n${add_data}`;
		} else {
			msg = `${type}\nIP: ${ip}\n<tg-spoiler>${add_data}`;
		}
	
		let url = "https://api.telegram.org/bot"+ BotToken +"/sendMessage?chat_id=" + ChatID + "&parse_mode=HTML&text=" + encodeURIComponent(msg);
		return fetch(url, {
			method: 'get',
			headers: {
				'Accept': 'text/html,application/xhtml+xml,application/xml;',
				'Accept-Encoding': 'gzip, deflate, br',
				'User-Agent': 'Mozilla/5.0 Chrome/90.0.4430.72'
			}
		});
	}
}

function base64Decode(str) {
	const bytes = new Uint8Array(atob(str).split('').map(c => c.charCodeAt(0)));
	const decoder = new TextDecoder('utf-8');
	return decoder.decode(bytes);
}

async function MD5MD5(text) {
	const encoder = new TextEncoder();
  
	const firstPass = await crypto.subtle.digest('MD5', encoder.encode(text));
	const firstPassArray = Array.from(new Uint8Array(firstPass));
	const firstHex = firstPassArray.map(b => b.toString(16).padStart(2, '0')).join('');

	const secondPass = await crypto.subtle.digest('MD5', encoder.encode(firstHex.slice(7, 27)));
	const secondPassArray = Array.from(new Uint8Array(secondPass));
	const secondHex = secondPassArray.map(b => b.toString(16).padStart(2, '0')).join('');
  
	return secondHex.toLowerCase();
}
