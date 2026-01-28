export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="max-w-content mx-auto px-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} The Light Project. All rights reserved.
        </p>
        <p className="text-sm text-white/60 mt-2">
          Maria-Efimia Dimoka • Contemporary Greek Artist
        </p>
      </div>
    </footer>
  );
}
