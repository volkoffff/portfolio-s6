export default function Footer() {
  return (
    <footer className="mt-48 pt-8">
      <div className="px-12 space-y-5">
        <div className="flex justify-between items-end">
          <a href="#">
            <h2 className="font-bold text-5xl">Robin Lanfranchi</h2>
          </a>
          <p className="font-semibold">Contact me</p>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-1">
            <a href="">Accueil</a>
            <a href="">Profile</a>
            <a href="">Travaux</a>
          </div>
          <div className="flex flex-col gap-1">
            <a href="">Github</a>
            <a href="">Linkedin</a>
            <a href="">Mail</a>
          </div>
        </div>
      </div>
      <div className="w-full font-semibold flex justify-between px-12 py-6">
        <p>Copyright ©2024 Robin Lanfranchi All rights reserved.</p>
        <p>handcrafted with love ❤</p>
      </div>
    </footer>
  );
}
