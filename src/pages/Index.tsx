import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";
import logo from "@/assets/creator-access-logo.png";

const Index = () => {
  const [copied, setCopied] = useState(false);
  const formLink = "https://forms.creatoraccess.com.br/";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(formLink);
      setCopied(true);
      toast.success("Link copiado!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Erro ao copiar link");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-2xl space-y-8 text-center animate-in fade-in duration-700">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img 
            src={logo} 
            alt="Creator Access Logo" 
            className="w-32 h-32 md:w-40 md:h-40 animate-in zoom-in duration-500"
          />
        </div>

        {/* Heading */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[hsl(var(--gradient-start))] via-[hsl(var(--gradient-mid))] to-[hsl(var(--gradient-end))] bg-clip-text text-transparent leading-tight animate-in slide-in-from-bottom-4 duration-700 delay-100">
            Gostaria de fechar parcerias com marcas?
          </h1>
        </div>

        {/* Instructions */}
        <p className="text-lg md:text-xl text-muted-foreground animate-in slide-in-from-bottom-4 duration-700 delay-200">
          Copie e cole o link abaixo no seu navegador para ter acesso ao formulário
        </p>

        {/* Link Card */}
        <Card className="p-6 bg-card border-border shadow-lg animate-in slide-in-from-bottom-4 duration-700 delay-300">
          <div className="space-y-4">
            {/* Link Display */}
            <div className="bg-muted rounded-lg p-4 border border-border">
              <p className="text-card-foreground font-mono text-sm md:text-base break-all select-all">
                {formLink}
              </p>
            </div>

            {/* Copy Button */}
            <Button
              onClick={handleCopy}
              disabled={copied}
              variant={copied ? "secondary" : "default"}
              className="w-full transition-all duration-300 hover:scale-105 disabled:scale-100 font-semibold text-base h-12"
            >
              {copied ? (
                <>
                  <Check className="mr-2 h-5 w-5" />
                  Copiado!
                </>
              ) : (
                <>
                  <Copy className="mr-2 h-5 w-5" />
                  Copiar Link
                </>
              )}
            </Button>
          </div>
        </Card>

        {/* Footer hint */}
        <p className="text-sm text-muted-foreground animate-in fade-in duration-700 delay-500">
          Clique no botão acima para copiar o link automaticamente
        </p>
      </div>
    </main>
  );
};

export default Index;
