/**
 * 	비동기 만들기 - 그냥 간단히 보기(이런게 있다 정도)
 * form 안의 키 값 상의 폼객체를 일반 객체로 변환하는 것
 */

 function handleSubmitAllClick() {
	const forms = document.querySelectorAll("form");
	const formData1 = new FormData(forms[0]);
	const formData2 = new FormData(forms[1]);
	 
	let reqData = {};
	
	/*
		formData = {
			username: "admin",
			password: "1234"
		}
		entries()를 하면 위의 폼객체가 아래 배열로 변환된다.
		entries = [
			["username", "admin"],
			["password", "1234"]
		]
	*/
	 
	for(let entry of formData1.entries()) {
		const [ key, value ] = entry;
		reqData = {
			 ...reqData,
			 [key]: value
		}
	}
	
	/*
		여기선 키 값이 같은게 존재하기 때문에 위의 방식처럼 하면 겹치게 된다
		따라서 공통된 키 값을 키 값으로 나머지 값을 배열 형태로 만들어줘야한다
		formData2 = {
			chk: "chk1",
			chk: "chk2",
			rdo: "rdo1",
		}
		entries = [
			["chk", "chk1"],
			["chk", "chk2"],
			["rdo", "rdo1"],
		]
	*/
	
	 
	let duplicatedKeys = [];
	let keyCount = {}
	
	for(let key of formData2.keys()) {
		if(Object.keys(keyCount).includes(key)) {
			keyCount = {
				...keyCount,
				[key]: keyCount[key] + 1	
			}
			continue;
		}
		keyCount = {
			...keyCount,
			[key]: 1
		}
	}
	
	for(let key of Object.keys(keyCount)) {
		if(keyCount[key] > 1) {
			duplicatedKeys = [ ...duplicatedKeys, key];
		}
	}
	
	console.log(keyCount);
	console.log(duplicatedKeys);
 
	for(let entry of formData2.entries()) {
	 
		 const [ key, value ] = entry;
		 if(duplicatedKeys.includes(key)) {
			 reqData = {
				 ...reqData,
				 [key]: [ ...(!reqData[key] ? [] : reqData[key]), value]
		 	}
		 	continue;
		 }
		 reqData = {
			 ...reqData,
			 [key]: value
		 }
	 
	 }

	console.log(reqData);
	
	// 쿼리String으로 바꿔주는 메소드 (URL머시기)
	const queryString = new URLSearchParams(reqData).toString();
	console.log(queryString);
	 
	fetch(`http://localhost:8080/dvd/form?${queryString}`)
	.then(response => {
		 response.text()
		 .then(data => {
			 const body = document.querySelector("body");
			 body.innerHTML += `<h1>${data}</h1>`;
			 console.log(data); 
		 })
	})
	
 }