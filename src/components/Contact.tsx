import { useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import D20Animation from "./D20Animation";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Função para enviar email via mailto:
  const handleEmailSend = () => {
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert("Preencha todos os campos antes de enviar!");
      return;
    }

    const subject = encodeURIComponent(`Contato de ${name}`);
    const body = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`);

    // Link mailto:
    const mailtoLink = `mailto:pedroh.takahashi@gmail.com?subject=${subject}&body=${body}`;

    // Abre o cliente de email do usuário
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Contact me</h2>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between gap-6 md:gap-10">
            {/* Informações de contato */}
            <div className="opacity-1 animate-fade-in w-full md:w-1/2">
              <div className="glass-card p-6 md:p-8">
                <div className="flex items-center mb-4 md:mb-6">
                  <D20Animation size={"3x"} color="#1A365D" className="mr-3" />
                  <h3 className="font-display text-xl md:text-2xl text-rpg-deep-blue">
                    Let's Connect
                  </h3>
                </div>

                <p className="text-gray-600 mb-8">
                  Ready to start a new project or just want to chat about technology?
                  Feel free to reach out through any of these channels:
                </p>

                <div className="space-y-6">
                  <a href="mailto:pedroh.takahashi@gmail.com" className="flex items-center group">
                    <div className="w-12 h-12 bg-rpg-royal-blue/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-rpg-royal-blue/20 transition-colors duration-300">
                      <Mail size={20} className="text-rpg-royal-blue" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Email</h4>
                      <p className="text-rpg-deep-blue group-hover:text-rpg-light-blue transition-colors duration-300">
                        pedroh.takahashi@gmail.com
                      </p>
                    </div>
                  </a>

                  <a href="https://github.com/pedrotakahashi" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                    <div className="w-12 h-12 bg-rpg-royal-blue/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-rpg-royal-blue/20 transition-colors duration-300">
                      <Github size={20} className="text-rpg-royal-blue" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">GitHub</h4>
                      <p className="text-rpg-deep-blue group-hover:text-rpg-light-blue transition-colors duration-300">
                        github.com/pedrotakahashi
                      </p>
                    </div>
                  </a>

                  <a href="https://linkedin.com/in/takahashi-pedro" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                    <div className="w-12 h-12 bg-rpg-royal-blue/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-rpg-royal-blue/20 transition-colors duration-300">
                      <Linkedin size={20} className="text-rpg-royal-blue" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">LinkedIn</h4>
                      <p className="text-rpg-deep-blue group-hover:text-rpg-light-blue transition-colors duration-300">
                        linkedin.com/in/takahashi-pedro
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Formulário */}
            <div className="opacity-0 animate-fade-in-delay-1 w-full md:w-1/2">
              <div className="glass-card p-6 md:p-8">
                <div className="flex items-center mb-4 md:mb-6">
                  <D20Animation size={"3x"} color="#1A365D" className="mr-3" />
                  <h3 className="font-display text-xl md:text-2xl text-rpg-deep-blue">
                    Send a Message
                  </h3>
                </div>

                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Seu Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-rpg-light-blue focus:border-transparent transition-all duration-300"
                      placeholder="Digite seu nome"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-rpg-light-blue focus:border-transparent transition-all duration-300"
                      placeholder="Digite seu email"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-rpg-light-blue focus:border-transparent transition-all duration-300"
                      placeholder="Digite sua mensagem"
                    ></textarea>
                  </div>

                  <button type="button" onClick={handleEmailSend} className="rpg-button w-full flex items-center justify-center">
                    <Send size={18} className="mr-2" />
                    Enviar Email
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

};

export default Contact;
