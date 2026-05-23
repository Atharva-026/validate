import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { ShieldCheck, ScanLine, Paintbrush, Database, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/features")({
  component: Features,
});

function Features() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="relative z-10">
        
        {/* Hero */}
        <div className="max-w-5xl mx-auto px-6 py-24 text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 relative z-10">
            A complete suite for <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Digital Credentials.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto relative z-10">
            From visual design to bulk automated issuance and cryptographic verification. Zuup Validate is the only tool you need to manage your certificates.
          </p>
        </div>

        {/* Studio Section */}
        <section className="py-24 border-t border-border/20 bg-[#050508] relative overflow-hidden">
           <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative group">
                 <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
                 
                 {/* Abstract CSS Canvas Graphic */}
                 <div className="w-full aspect-square md:aspect-[4/3] rounded-2xl md:rounded-[1.5rem] border border-white/10 bg-[#0f0f12] shadow-2xl relative z-10 p-6 flex flex-col overflow-hidden">
                    {/* Top toolbar */}
                    <div className="flex gap-2 mb-6">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    {/* Editor view */}
                    <div className="flex-1 flex gap-4">
                       <div className="w-1/4 flex flex-col gap-2">
                         <div className="w-full h-8 bg-white/5 rounded" />
                         <div className="w-full h-8 bg-white/5 rounded" />
                         <div className="w-full h-8 border border-primary/30 bg-primary/5 rounded flex items-center justify-center text-xs text-primary font-mono">{`{Name}`}</div>
                       </div>
                       <div className="flex-1 bg-white/10 rounded-lg border border-white/10 relative p-6 flex items-center justify-center">
                          <div className="w-[90%] aspect-[1.4] bg-white rounded shadow-xl flex flex-col items-center justify-center relative p-6 text-center ring-1 ring-primary/20">
                             <div className="w-12 h-12 bg-primary/10 rounded-full mb-4 flex items-center justify-center">
                               <Paintbrush className="w-5 h-5 text-primary" />
                             </div>
                             <div className="w-3/4 h-2 bg-black/10 rounded mb-6" />
                             <div className="border border-primary border-dashed px-4 py-2 bg-primary/5 text-primary font-bold">{`{Name}`}</div>
                             <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-black/10 border-dashed rounded flex items-center justify-center">
                               <ScanLine className="w-5 h-5 text-black/20" />
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="order-1 lg:order-2">
                 <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary mb-6">
                   <Paintbrush className="h-4 w-4" /> Mailmerge Studio
                 </div>
                 <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The ultimate visual canvas.</h2>
                 <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                   Stop wrestling with code or complex absolute positioning. Just upload your beautiful certificate template and visually drag dynamic elements exactly where they belong.
                 </p>
                 <ul className="space-y-4">
                   <li className="flex items-center gap-3 text-muted-foreground"><CheckCircle2 className="h-5 w-5 text-primary" /> Freeform drag and drop positioning</li>
                   <li className="flex items-center gap-3 text-muted-foreground"><CheckCircle2 className="h-5 w-5 text-primary" /> Integrated resizable QR Codes</li>
                   <li className="flex items-center gap-3 text-muted-foreground"><CheckCircle2 className="h-5 w-5 text-primary" /> Real-time visual feedback</li>
                   <li className="flex items-center gap-3 text-muted-foreground"><CheckCircle2 className="h-5 w-5 text-primary" /> 60+ Beautiful Google Fonts built-in</li>
                 </ul>
              </div>
           </div>
        </section>

        {/* Data Section */}
        <section className="py-24 border-t border-border/20 bg-black relative overflow-hidden">
           <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                 <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-medium text-blue-400 mb-6">
                   <Database className="h-4 w-4" /> Bulk Automation
                 </div>
                 <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Your data, mapped perfectly.</h2>
                 <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                   Generating one certificate is easy. Generating 10,000 used to be hard. With our CSV engine, you map your spreadsheet columns directly to the canvas blocks.
                 </p>
                 <ul className="space-y-4">
                   <li className="flex items-center gap-3 text-muted-foreground"><CheckCircle2 className="h-5 w-5 text-blue-400" /> Upload unlimited CSV rows</li>
                   <li className="flex items-center gap-3 text-muted-foreground"><CheckCircle2 className="h-5 w-5 text-blue-400" /> Map "Name", "Email", and custom fields</li>
                   <li className="flex items-center gap-3 text-muted-foreground"><CheckCircle2 className="h-5 w-5 text-blue-400" /> Automatic unique ID generation</li>
                   <li className="flex items-center gap-3 text-muted-foreground"><CheckCircle2 className="h-5 w-5 text-blue-400" /> 1-Click bulk PDF export</li>
                 </ul>
              </div>
              <div className="relative group">
                 <div className="absolute -inset-1 bg-gradient-to-l from-blue-600 to-purple-600 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
                 
                 {/* Abstract CSS Database Mapping Graphic */}
                 <div className="w-full aspect-square md:aspect-[4/3] rounded-2xl md:rounded-[1.5rem] border border-white/10 bg-[#0f0f12] shadow-2xl relative z-10 p-8 flex flex-col gap-4 overflow-hidden">
                    <div className="text-sm text-muted-foreground font-mono mb-2 uppercase tracking-widest">CSV Mapping</div>
                    
                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between">
                       <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center text-blue-400 font-mono font-bold text-xs">C1</div>
                         <div className="font-mono text-sm">email_address</div>
                       </div>
                       <ArrowRight className="w-4 h-4 text-muted-foreground" />
                       <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-md text-blue-400 text-sm">{`{Email}`}</div>
                    </div>

                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between">
                       <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center text-primary font-mono font-bold text-xs">C2</div>
                         <div className="font-mono text-sm">full_name</div>
                       </div>
                       <ArrowRight className="w-4 h-4 text-muted-foreground" />
                       <div className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-md text-primary text-sm">{`{Name}`}</div>
                    </div>

                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between opacity-50">
                       <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-white/50 font-mono font-bold text-xs">C3</div>
                         <div className="font-mono text-sm">department</div>
                       </div>
                       <ArrowRight className="w-4 h-4 text-muted-foreground" />
                       <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-white/50 text-sm">Unmapped</div>
                    </div>
                 </div>

              </div>
           </div>
        </section>
        
        {/* Verification Section */}
        <section className="py-24 border-t border-border/20 bg-[#050508] relative overflow-hidden">
           <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative flex justify-center">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-green-500/20 blur-[100px] rounded-full pointer-events-none" />
                 <div className="relative rounded-2xl border border-white/10 bg-black p-10 shadow-2xl backdrop-blur-sm flex flex-col items-center text-center max-w-sm w-full">
                    <ShieldCheck className="h-20 w-20 text-green-400 mb-6" />
                    <h3 className="text-3xl font-bold text-white mb-2">Verified</h3>
                    <p className="text-muted-foreground mb-6">Certificate ID: ZUP-A1B2C3</p>
                    <div className="w-full h-px bg-border/50 mb-6" />
                    <p className="text-sm text-muted-foreground">This credential is cryptographically secured and verified by ZuupValidate.</p>
                 </div>
              </div>
              <div className="order-1 lg:order-2">
                 <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-1.5 text-xs font-medium text-green-400 mb-6">
                   <ScanLine className="h-4 w-4" /> Instant Verification
                 </div>
                 <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Trust, but verify.</h2>
                 <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                   Every PDF generated contains a scannable QR code and a unique verification link. Anyone can instantly verify the authenticity of your certificates without needing an account.
                 </p>
              </div>
           </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-32 relative text-center border-t border-border/20">
          <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
          <h2 className="text-4xl font-bold text-white mb-8">Ready to issue credentials?</h2>
          <Button asChild className="rounded-full bg-white text-black hover:bg-gray-200 h-14 px-10 text-lg font-medium shadow-[0_0_40px_rgba(255,255,255,0.2)]">
            <Link to="/admin">Launch the Studio <ArrowRight className="h-5 w-5 ml-2" /></Link>
          </Button>
        </section>

      </main>
    </div>
  );
}
