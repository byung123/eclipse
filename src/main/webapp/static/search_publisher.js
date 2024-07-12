function addPublisher() {
	const searchInput = document.querySelector(".input-publisher");
	location.href = `http://localhost:8080/dvd/publisher/search?searchText=${searchInput.value}`;
}