const CardHistory = ({ title }) => {
  return (
    <div className="p-5 rounded-lg drop-shadow-lg bg-white my-3">
      <h4 className="font-bold text-lg">{title}</h4>
      <ol className="list-decimal font-medium ml-4">
        <li>
          <p>Pembelian Sepatu</p>
          <p className="opacity-50">Rp. 120.000 - 12 Januari 2023</p>
        </li>
        <li>
          <p>Pembelian Sepatu</p>
          <p className="opacity-50">Rp. 120.000 - 12 Januari 2023</p>
        </li>
        <li>
          <p>Pembelian Sepatu</p>
          <p className="opacity-50">Rp. 120.000 - 12 Januari 2023</p>
        </li>
      </ol>
    </div>
  );
};

export default CardHistory;
