const wait = ms => {
  return new Promise((resolve, reject) => {
    console.log(`wait ${ms}ms...`);
    setInterval(_ => {
      resolve('OK!');
    }, ms)
  });
}

const fetchData = url => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(xhr.response);
        return;
      }

      reject(new Error(xhr.statusText));
    };

    xhr.onerror = () => {
      reject(new Error(xhr.statusText));
    };

    xhr.send(null);
  });
};

const renderHoges = data => {
  const root = document.getElementById('root');
  root.innerHTML = '';

  data.forEach(item => {
    let node = document.createElement('div');
    node.innerText = `${item.id}: ${item.hoge}`;
    root.appendChild(node);
  });

  return data.length;
};

wait(2000)
.then(_ => fetchData('/api/hoges'))
.then(JSON.parse)
.then(renderHoges)
.then(length => console.log(`${length} hoges rendered!`))
.catch(error => console.error(error));

