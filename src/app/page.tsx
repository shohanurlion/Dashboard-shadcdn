import Image from "next/image";

export default function Home() {
  return (
 <div>
             {/* value={typeof window !== "undefined" ? (document.documentElement.classList.contains('dark') ? 'dark' : (localStorage.theme === 'system' ? 'system' : 'light')) : 'system'}
                        onValueChange={(value) => {
                            if (value === 'system') {
                                localStorage.theme = 'system';
                                if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                                    document.documentElement.classList.add('dark');
                                } else {
                                    document.documentElement.classList.remove('dark');
                                }
                            } else if (value === 'dark') {
                                localStorage.theme = 'dark';
                                document.documentElement.classList.add('dark');
                            } else {
                                localStorage.theme = 'light';
                                document.documentElement.classList.remove('dark');
                            }
                        }} */}
                        Home page
 </div>
  );
}
