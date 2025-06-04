
  window.onload = function() {
    const yearSelect = document.getElementById("id_year");
    const monthSelect = document.getElementById("id_month");

    const today = new Date();
    const thisYear = today.getFullYear();

    // 初期値の読み込み
    const ym = document.getElementById("select-month").value;
    const initYear = parseInt(ym.slice(0,4), 10);
    const initMonth = parseInt(ym.slice(4,6), 10);

    // 年のoptionを生成 (2000年～今年)
    for(let y=2000; y<=thisYear; y++) {
      const option = document.createElement("option");
      option.value = y;
      option.textContent = y;
      if(y === initYear) option.selected = true;
      yearSelect.appendChild(option);
    }

    // 月のoptionを生成 (1～12)
    for(let m=1; m<=12; m++) {
      const option = document.createElement("option");
      option.value = m;
      option.textContent = m;
      if(m === initMonth) option.selected = true;
      monthSelect.appendChild(option);
    }
  }