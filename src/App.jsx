import React, { useState, useEffect } from 'react';
    import './App.css';

    function App() {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [displayText, setDisplayText] = useState('');
      const [showContent, setShowContent] = useState(false);
      const [counters, setCounters] = useState([0, 0, 0, 0, 0, 0]);
      const [timelineProgress, setTimelineProgress] = useState(0);
      const fullText = "Revolucione seu Potencial Comercial com IA Avançada";

      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };

      useEffect(() => {
        let currentIndex = 0;
        const totalTime = 4000; // 4 segundos no total
        const intervalTime = totalTime / fullText.length; // Intervalo por letra

        const interval = setInterval(() => {
          if (currentIndex <= fullText.length) {
            setDisplayText(fullText.slice(0, currentIndex));
            currentIndex++;
          } else {
            clearInterval(interval);
            setShowContent(true); // Exibe o subtítulo e o botão após a animação
          }
        }, intervalTime);

        return () => clearInterval(interval);
      }, []);

      useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const targetCounts = [38, 6, 100, 50, 90, 3];
                const duration = 2000; // 2 segundos para a animação
                const interval = duration / 100; // Intervalo de atualização

                targetCounts.forEach((target, index) => {
                  let currentCount = 0;
                  const counterInterval = setInterval(() => {
                    if (currentCount < target) {
                      currentCount++;
                      setCounters((prevCounters) => {
                        const newCounters = [...prevCounters];
                        newCounters[index] = currentCount;
                        return newCounters;
                      });
                    } else {
                      clearInterval(counterInterval);
                    }
                  }, interval / target);
                });
              }
            });
          },
          { threshold: 0.5 } // Dispara quando 50% da seção estiver visível
        );

        const impactSection = document.querySelector('.impact');
        if (impactSection) {
          observer.observe(impactSection);
        }

        return () => {
          if (impactSection) {
            observer.unobserve(impactSection);
          }
        };
      }, []);

      useEffect(() => {
        const timelineObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setTimelineProgress(100); // Completa a linha da timeline
              }
            });
          },
          { threshold: 0.5 } // Dispara quando 50% da seção estiver visível
        );

        const timelineSection = document.querySelector('.how-we-work');
        if (timelineSection) {
          timelineObserver.observe(timelineSection);
        }

        return () => {
          if (timelineSection) {
            timelineObserver.unobserve(timelineSection);
          }
        };
      }, []);

      return (
        <div className="app">
          <header className="header">
            <div className="logo">FlowMax Digital</div>
            <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
              <span className="menu-icon"></span>
            </button>
            <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
              <a href="#inicio" onClick={toggleMenu}>Início</a>
              <a href="#impacto" onClick={toggleMenu}>Impacto</a>
              <a href="#solucoes" onClick={toggleMenu}>Soluções</a>
              <a href="#faq" onClick={toggleMenu}>FAQ</a>
              <a href="#contato" onClick={toggleMenu}>Contato</a>
            </nav>
          </header>
          <main>
            <section className="hero">
              <div className="hero-content">
                <h1 className="hero-title">
                  <span className="typewriter">{displayText}</span>
                </h1>
                {showContent && (
                  <>
                    <p className="hero-subtitle">
                      Transforme dados em resultados. Automatize o sucesso.
                    </p>
                    <button className="hero-cta">INICIE SUA TRANSFORMAÇÃO DIGITAL</button>
                  </>
                )}
              </div>
              <div className="hero-video">
                <video autoPlay loop muted playsInline>
                  <source src="/particles.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos HTML5.
                </video>
              </div>
            </section>

            <section className="partners">
              <h2 className="partners-title">Potencializados pelos Gigantes da Tecnologia</h2>
              <div className="partners-grid">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                  alt="Amazon"
                  className="partner-logo"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
                  alt="Microsoft"
                  className="partner-logo"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg"
                  alt="OpenAI"
                  className="partner-logo"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Anthropic_logo.svg"
                  alt="Anthropic"
                  className="partner-logo"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                  alt="Google"
                  className="partner-logo"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/9e/DeepSeek_logo.svg"
                  alt="DeepSeek"
                  className="partner-logo"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg"
                  alt="Meta"
                  className="partner-logo"
                />
              </div>
            </section>

            <section className="impact">
              <h2 className="impact-title">Resultados Que Falam Por Si</h2>
              <div className="impact-grid">
                <div className="impact-item">
                  <div className="impact-item-inner">
                    <div className="impact-item-front">
                      <span className="impact-number">{counters[0]}%</span>
                      <span className="impact-text">aumento médio no faturamento</span>
                    </div>
                    <div className="impact-item-back">
                      <p>Nossas soluções de IA aumentaram o faturamento em até 38% para nossos clientes.</p>
                    </div>
                  </div>
                </div>
                <div className="impact-item">
                  <div className="impact-item-inner">
                    <div className="impact-item-front">
                      <span className="impact-number">{counters[1]}</span>
                      <span className="impact-text">dias redução na jornada de compra</span>
                    </div>
                    <div className="impact-item-back">
                      <p>Reduza o tempo de compra com automação inteligente.</p>
                    </div>
                  </div>
                </div>
                <div className="impact-item">
                  <div className="impact-item-inner">
                    <div className="impact-item-front">
                      <span className="impact-number">{counters[2]}%</span>
                      <span className="impact-text">escalabilidade sem novas contratações</span>
                    </div>
                    <div className="impact-item-back">
                      <p>Expanda suas operações sem aumentar custos com pessoal.</p>
                    </div>
                  </div>
                </div>
                <div className="impact-item">
                  <div className="impact-item-inner">
                    <div className="impact-item-front">
                      <span className="impact-number">{counters[3]}%</span>
                      <span className="impact-text">redução em custos operacionais</span>
                    </div>
                    <div className="impact-item-back">
                      <p>Automatize processos e reduza custos em até 50%.</p>
                    </div>
                  </div>
                </div>
                <div className="impact-item">
                  <div className="impact-item-inner">
                    <div className="impact-item-front">
                      <span className="impact-number">{counters[4]}%</span>
                      <span className="impact-text">aumento na satisfação do cliente</span>
                    </div>
                    <div className="impact-item-back">
                      <p>Melhore a experiência do cliente com atendimento personalizado.</p>
                    </div>
                  </div>
                </div>
                <div className="impact-item">
                  <div className="impact-item-inner">
                    <div className="impact-item-front">
                      <span className="impact-number">{counters[5]}x</span>
                      <span className="impact-text">aumento na taxa de conversão de leads</span>
                    </div>
                    <div className="impact-item-back">
                      <p>Converta mais leads em vendas com IA preditiva.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="how-we-work">
              <h2 className="how-we-work-title">Nossa Abordagem Inovadora</h2>
              <div className="timeline">
                <div className="timeline-line" style={{ height: `${timelineProgress}%` }}></div>
                <div className="timeline-item">
                  <div className="timeline-icon">1</div>
                  <div className="timeline-content">
                    <h3>Diagnóstico Inteligente</h3>
                    <p>Analisamos seus processos para identificar oportunidades de melhoria.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-icon">2</div>
                  <div className="timeline-content">
                    <h3>Estratégia Personalizada</h3>
                    <p>Criamos um plano sob medida para suas necessidades.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-icon">3</div>
                  <div className="timeline-content">
                    <h3>Implementação Ágil</h3>
                    <p>Executamos as soluções de forma rápida e eficiente.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-icon">4</div>
                  <div className="timeline-content">
                    <h3>Otimização Contínua</h3>
                    <p>Acompanhamos e ajustamos para garantir resultados duradouros.</p>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      );
    }

    export default App;
