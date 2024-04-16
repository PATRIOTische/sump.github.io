async function pingPage(pageUrl) {
    try {
      const response = await fetch(pageUrl);
      if (response.ok) {
        return 'green';
      } else if (response.status === 400 || response.status === 404) {
        return 'orange';
      } else {
        return 'red';
      }
    } catch (error) {
      return 'gray';
    }
  }

  async function updatePageStatus() {
    const statusItems = document.querySelectorAll('.status-item');
    for (const item of statusItems) {
      const pageId = item.id;
      const pageUrl = `https://sumptranslate.pp.ua/${pageId}`;

      const statusColor = await pingPage(pageUrl);
      item.querySelector('.circle').classList.remove('gray', 'green', 'orange', 'red');
      item.querySelector('.circle').classList.add(statusColor);
    }
  }

  async function updateTextItemStatus() {
    const textItems = document.querySelectorAll('.text-item');
    for (const item of textItems) {
      const pageId = item.id;
      const pageUrl = `https://sumptranslate.pp.ua/${pageId}`;

      const statusColor = await pingPage(pageUrl);
      item.dataset.color = statusColor;

      const spanElement = item.querySelector('span');
      spanElement.textContent = statusColor === 'green' ? 'ok' : '?';
      item.querySelector('.gray-text, .orange-text, .red-text').classList.remove('green-text', 'orange-text', 'red-text');
      item.querySelector('.gray-text, .orange-text, .red-text').classList.add(statusColor + '-text');
    }
  }

  updatePageStatus();
  updateTextItemStatus();