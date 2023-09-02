const CardHistory = ({ title, data, filter }) => {
  const formatRupiah = (angka) => {
    if (angka.toString().length > 3) {
      let reverse = angka.toString().split("").reverse().join("");
      let ribuan = reverse.match(/\d{1,3}/g);
      let hasil = ribuan.join(".").split("").reverse().join("");
      return hasil;
    }
    return angka;
  };
  return (
    <div className="p-5 rounded-lg drop-shadow-lg bg-white my-3">
      <h4 className="font-bold text-lg">{title}</h4>
      <ol className="list-decimal font-medium ml-4">
        {data.map((item) => {
          if (item.jenis == filter) {
            let date = new Date(item.tanggal);
            let tanggal = date.getDate();
            let bulan = date.toLocaleString("default", { month: "long" });
            let tahun = date.getFullYear();

            let tanggalfix = tanggal + " " + bulan + " " + tahun;

            const jumlah = formatRupiah(item.jumlah);
            return (
              <li key={item.id}>
                <p>{item.nama}</p>
                <p className="opacity-50">
                  Rp. {jumlah} - {tanggalfix}
                </p>
              </li>
            );
          }
        })}
      </ol>
    </div>
  );
};

export default CardHistory;
