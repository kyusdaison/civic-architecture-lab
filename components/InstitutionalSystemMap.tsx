import React from 'react';
import { Database, Fingerprint, Landmark, Network, ScrollText, ShieldCheck } from 'lucide-react';
import type { Lang } from '../content';

interface InstitutionalSystemMapProps {
  lang: Lang;
  compact?: boolean;
}

const InstitutionalSystemMap: React.FC<InstitutionalSystemMapProps> = ({ lang, compact = false }) => {
  const labels =
    lang === 'zh'
      ? {
          eyebrow: '制度运行图',
          title: '可信公共系统的运行层',
          core: '公共授权',
          footer: '从授权到服务，从证据到监督，形成可长期管护的制度基础设施。',
          layers: [
            { title: '身份', text: '资格、凭证与参与边界', icon: Fingerprint },
            { title: '服务', text: '访问规则与公共服务入口', icon: Network },
            { title: '证据', text: '记录、审查与可追溯性', icon: Database },
            { title: '监督', text: '合规、监管与问责路径', icon: ShieldCheck },
          ],
        }
      : {
          eyebrow: 'Operating Map',
          title: 'Trusted Public System Layers',
          core: 'Public Mandate',
          footer: 'Mandate, services, evidence and oversight align into long-term institutional infrastructure.',
          layers: [
            { title: 'Identity', text: 'Eligibility, credentials and participation boundaries', icon: Fingerprint },
            { title: 'Services', text: 'Access rules and public-service gateways', icon: Network },
            { title: 'Evidence', text: 'Records, review and traceability', icon: Database },
            { title: 'Oversight', text: 'Compliance, supervision and accountability paths', icon: ShieldCheck },
          ],
        };

  return (
    <div className={`system-map ${compact ? 'system-map-compact' : ''}`} aria-label={labels.title}>
      <div className="system-map-grid" />
      <svg className="system-map-lines" viewBox="0 0 720 420" role="presentation" aria-hidden="true">
        <path d="M360 92 L188 178 L188 302" />
        <path d="M360 92 L532 178 L532 302" />
        <path d="M188 178 H532" />
        <path d="M188 302 H532" />
        <path d="M360 92 V340" />
        <circle cx="360" cy="92" r="42" />
        <circle cx="188" cy="178" r="10" />
        <circle cx="532" cy="178" r="10" />
        <circle cx="188" cy="302" r="10" />
        <circle cx="532" cy="302" r="10" />
      </svg>

      <div className="relative z-10">
        <div className="mb-7 flex items-center justify-between gap-5 border-b border-white/10 pb-5">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-fcb-gold">{labels.eyebrow}</p>
            <h3 className="mt-2 font-serif text-2xl leading-tight text-white md:text-3xl">{labels.title}</h3>
          </div>
          <div className="hidden h-11 w-11 shrink-0 items-center justify-center border border-fcb-gold/30 bg-fcb-gold/10 text-fcb-gold sm:flex">
            <ScrollText size={18} strokeWidth={1.7} />
          </div>
        </div>

        <div className="system-map-body">
          <div className="system-map-core">
            <Landmark size={22} strokeWidth={1.65} />
            <span>{labels.core}</span>
          </div>

          <div className="system-map-layer layer-a">
            {React.createElement(labels.layers[0].icon, { size: 18, strokeWidth: 1.65 })}
            <div>
              <strong>{labels.layers[0].title}</strong>
              <span>{labels.layers[0].text}</span>
            </div>
          </div>
          <div className="system-map-layer layer-b">
            {React.createElement(labels.layers[1].icon, { size: 18, strokeWidth: 1.65 })}
            <div>
              <strong>{labels.layers[1].title}</strong>
              <span>{labels.layers[1].text}</span>
            </div>
          </div>
          <div className="system-map-layer layer-c">
            {React.createElement(labels.layers[2].icon, { size: 18, strokeWidth: 1.65 })}
            <div>
              <strong>{labels.layers[2].title}</strong>
              <span>{labels.layers[2].text}</span>
            </div>
          </div>
          <div className="system-map-layer layer-d">
            {React.createElement(labels.layers[3].icon, { size: 18, strokeWidth: 1.65 })}
            <div>
              <strong>{labels.layers[3].title}</strong>
              <span>{labels.layers[3].text}</span>
            </div>
          </div>
        </div>

        <p className="mt-7 border-t border-white/10 pt-5 text-sm font-light leading-relaxed text-gray-300">
          {labels.footer}
        </p>
      </div>
    </div>
  );
};

export default InstitutionalSystemMap;
