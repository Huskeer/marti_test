export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="container py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-white font-semibold text-lg">Национален Туристически Портал</div>
            <p className="mt-2 text-gray-400 text-sm">
              БТС – заедно по пътеките на България.
            </p>
          </div>
          <div>
            <div className="text-white font-semibold">Навигация</div>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="#">Дестинации</a></li>
              <li><a href="#">Събития</a></li>
              <li><a href="#">Обекти</a></li>
              <li><a href="#">Дружества</a></li>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold">Контакти</div>
            <p className="mt-2 text-sm">info@bts.bg</p>
            <p className="text-sm">© {new Date().getFullYear()} БТС</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
