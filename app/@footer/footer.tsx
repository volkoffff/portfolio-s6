export default function Footer() {
  return (
    <footer className="pt-8 mt-10 md:mt-20 ">
      <div className="px-12 space-y-6">
        <div className="flex justify-between items-end">
          <a href="#">
            <h2 className="font-bold text-6xl">Robin Lanfranchi</h2>
          </a>
          <p className="font-semibold">Contact me</p>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-1">
            <a href="#home">Accueil</a>
            <a href="#profile">Profile</a>
            <a href="#project">Travaux</a>
          </div>
          <div className="flex flex-col gap-1">
            <a href="https://github.com/volkoffff">Github</a>
            <a href="https://www.linkedin.com/in/robin-lanfranchi-905293231/">Linkedin</a>
            <a href="mailto:robin.lanfranchi1338@gmail.com">Mail</a>
          </div>
        </div>
      </div>
      <div className="w-full font-semibold flex justify-between px-12 py-8">
        <p>Copyright ©2024 Robin Lanfranchi All rights reserved.</p>
        <p>handcrafted with love ❤</p>
      </div>
    </footer>
  );
}
