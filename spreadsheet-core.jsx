/* global React */

// ============ Tabs metadata (all 28) ============
const TABS = [
  { i: 1,  name: 'Instructions',         color: '#8AA3B0', icon: '📘', group: 'setup' },
  { i: 2,  name: 'Setup',                color: '#8AA3B0', icon: '⚙️', group: 'setup' },
  { i: 3,  name: 'Command Dashboard',    color: '#C4714A', icon: '🏠', group: 'dash' },
  { i: 4,  name: 'Bank Account',         color: '#C4714A', icon: '🏦', group: 'book' },
  { i: 5,  name: 'Calendar',             color: '#C4714A', icon: '📅', group: 'book' },
  { i: 6,  name: 'Bookkeeping Setup',    color: '#C4714A', icon: '💰', group: 'book' },
  { i: 7,  name: 'Income Tracker',       color: '#C4714A', icon: '💵', group: 'book' },
  { i: 8,  name: 'Expense Tracker',      color: '#C4714A', icon: '🧾', group: 'book' },
  { i: 9,  name: 'Mileage Tracker',      color: '#C4714A', icon: '🚗', group: 'book' },
  { i: 10, name: 'Tax Estimator ★',      color: '#C4714A', icon: '🏛️', group: 'book' },
  { i: 11, name: 'Monthly / Annual',     color: '#C4714A', icon: '📊', group: 'book' },
  { i: 12, name: 'Order Setup',          color: '#7A9E7E', icon: '🛒', group: 'order' },
  { i: 13, name: 'Order Overview',       color: '#7A9E7E', icon: '📦', group: 'order' },
  { i: 14, name: 'Sales Overview',       color: '#7A9E7E', icon: '📈', group: 'order' },
  { i: 15, name: 'Recipe / BOM',         color: '#7A9E7E', icon: '🧪', group: 'order' },
  { i: 16, name: 'Pricing Calculator',   color: '#7A9E7E', icon: '🏷️', group: 'order' },
  { i: 17, name: 'Customer Tracker',     color: '#7A9E7E', icon: '👤', group: 'order' },
  { i: 18, name: 'Order Tracker',        color: '#7A9E7E', icon: '✅', group: 'order' },
  { i: 19, name: 'Material Inventory',   color: '#D4A843', icon: '🧶', group: 'inv' },
  { i: 20, name: 'Product Inventory',    color: '#D4A843', icon: '🕯️', group: 'inv' },
  { i: 21, name: 'Invoice Generator',    color: '#D4A843', icon: '📄', group: 'inv' },
  { i: 22, name: 'Event Setup ★',        color: '#D4776A', icon: '🎪', group: 'event' },
  { i: 23, name: 'Event Tracker ★',      color: '#D4776A', icon: '🎟️', group: 'event' },
  { i: 24, name: 'Event Dashboard ★',    color: '#D4776A', icon: '🎯', group: 'event' },
  { i: 25, name: 'Task Setup',           color: '#B79D7A', icon: '🗂️', group: 'task' },
  { i: 26, name: 'Task Tracker',         color: '#B79D7A', icon: '☑️', group: 'task' },
  { i: 27, name: 'Platform Compare ★',   color: '#8AA3B0', icon: '⚖️', group: 'multi' },
  { i: 28, name: 'Quick Entry ★',        color: '#8AA3B0', icon: '⚡', group: 'multi' },
];

// ============ Common chrome ============
function ColHead({ cols = 18 }) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return (
    <div className="colhead">
      <div className="corner"></div>
      {Array.from({length: cols}).map((_,i) => (
        <div className="ch" key={i}>{letters[i]}</div>
      ))}
    </div>
  );
}
function RowHead({ rows = 32 }) {
  return (
    <div className="rowhead">
      {Array.from({length: rows}).map((_,i) => (
        <div className="rh" key={i}>{i+1}</div>
      ))}
    </div>
  );
}

function Menubar() {
  return (
    <div className="menubar">
      <div className="filename">
        <div className="doc-icon">B</div>
        <div>
          <div>Business HQ — Handmade Seller</div>
          <div style={{fontSize: 10.5, fontWeight: 400, color: '#888', letterSpacing: '0.04em'}}>
            Last edit was 2 minutes ago
          </div>
        </div>
      </div>
      <div className="menus" style={{marginLeft: 18}}>
        <span>File</span><span>Edit</span><span>View</span><span>Insert</span>
        <span>Format</span><span>Data</span><span>Tools</span><span>Extensions</span><span>Help</span>
      </div>
      <div style={{marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10}}>
        <div style={{
          padding: '6px 12px', borderRadius: 4, background: 'var(--sage-wash)',
          color: 'var(--sage-2)', fontSize: 11.5, fontWeight: 600
        }}>● Saved to Drive</div>
        <div style={{
          width: 30, height: 30, borderRadius: '50%', background: 'var(--terracotta)',
          color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: 12
        }}>M</div>
      </div>
    </div>
  );
}

function Toolbar() {
  const ic = ['↶','↷','🖨','✓','100%','$','%','.00','123','Inter','—','B','I','U','A','▦','≡','⤓'];
  return (
    <div className="toolbar">
      {ic.map((c,i) => (
        <React.Fragment key={i}>
          <div className="tool-btn">{c}</div>
          {(i===2||i===4||i===8||i===10||i===14) && <div className="tool-sep" />}
        </React.Fragment>
      ))}
    </div>
  );
}

function FormulaBar({ cellRef='A1', formula='' }) {
  return (
    <div className="formula-bar">
      <div className="cell-ref">{cellRef}</div>
      <div className="fx">ƒx</div>
      <div className="formula-val">{formula}</div>
    </div>
  );
}

function TabBar({ active, onSelect }) {
  return (
    <div className="tabbar">
      <div className="tab-ctrl">＋</div>
      <div className="tab-ctrl">≡</div>
      {TABS.map(t => (
        <div
          key={t.i}
          onClick={() => onSelect(t.i)}
          className={'tab ' + (active === t.i ? 'active' : '')}
          style={{ color: t.color, cursor: 'pointer' }}
        >
          <span className="dot" style={{ background: t.color }}></span>
          <span style={{color: active===t.i ? '#2E2E2E' : '#4a4a4a'}}>
            {t.i}. {t.name}
          </span>
        </div>
      ))}
    </div>
  );
}

// ============ TAB: Command Dashboard ============
function CommandDashboard() {
  return (
    <div style={{ padding: 24, height: '100%', overflow: 'hidden' }}>
      {/* Title */}
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 18 }}>
        <div>
          <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 11,
            letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--terracotta)' }}>
            🏠 &nbsp;Command Dashboard
          </div>
          <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 26, color: 'var(--charcoal)', marginTop: 4 }}>
            Hello, Maya — here's where things stand.
          </div>
        </div>
        <div style={{ textAlign: 'right', fontSize: 11, color: 'var(--muted)' }}>
          <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
            Reporting Period
          </div>
          <div style={{ fontSize: 13, color: 'var(--charcoal)', marginTop: 4 }}>
            May 1 — May 13, 2026 &nbsp;·&nbsp; YTD 2026
          </div>
        </div>
      </div>

      {/* KPI cards */}
      <div className="kpi-grid">
        <div className="kpi ok">
          <span className="label">MTD Revenue</span>
          <span className="value">$4,287</span>
          <span className="delta">▲ 18% vs. last month</span>
        </div>
        <div className="kpi warn">
          <span className="label">MTD Expenses</span>
          <span className="value">$1,612</span>
          <span className="delta">on track — within budget</span>
        </div>
        <div className="kpi ok">
          <span className="label">MTD Net Profit</span>
          <span className="value">$2,675</span>
          <span className="delta" style={{color: 'var(--sage-2)'}}>62% margin</span>
        </div>
        <div className="kpi">
          <span className="label">YTD Revenue</span>
          <span className="value">$28,940</span>
          <span className="delta" style={{color: 'var(--muted)'}}>Goal: $45,000</span>
        </div>
        <div className="kpi ok">
          <span className="label">YTD Profit Margin</span>
          <span className="value">58.2%</span>
          <span className="delta">▲ 4 pts YoY</span>
        </div>
        <div className="kpi alert">
          <span className="label">Open Orders</span>
          <span className="value">12</span>
          <span className="delta">3 ship today &nbsp;·&nbsp; 1 overdue</span>
        </div>
      </div>

      {/* Thermometer */}
      <div className="card" style={{ marginTop: 18 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
          <h4 style={{margin: 0}}>2026 Profit Goal Thermometer</h4>
          <div style={{ fontSize: 11, color: 'var(--muted)' }}>
            $16,850 of $30,000 net profit · 16 weeks to year-end
          </div>
        </div>
        <div className="thermo">
          <div className="thermo-track">
            <div className="thermo-fill" style={{ width: '56%' }}></div>
          </div>
          <div className="thermo-label">56%</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: 'var(--muted)', marginTop: 6 }}>
          <span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span>
          <span style={{color: 'var(--terracotta)', fontWeight: 700}}>● MAY</span>
          <span>JUN</span><span>JUL</span><span>AUG</span><span>SEP</span><span>OCT</span><span>NOV</span><span>DEC</span>
        </div>
      </div>

      {/* Charts row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', gap: 14, marginTop: 14 }}>
        {/* Revenue by month */}
        <div className="card">
          <h4>Revenue by Month — 2026</h4>
          <RevByMonthChart />
        </div>
        {/* Top 5 products */}
        <div className="card">
          <h4>Top 5 Products by Revenue</h4>
          <TopProducts />
        </div>
        {/* Expense donut */}
        <div className="card">
          <h4>Expense Breakdown</h4>
          <ExpenseDonut />
        </div>
      </div>

      {/* Quick links */}
      <div style={{ display: 'flex', gap: 10, marginTop: 14, flexWrap: 'wrap' }}>
        {['💰 Bookkeeping','📦 Orders','🧶 Inventory','🎪 Craft Fairs','🏛️ Taxes','⚡ Quick Entry'].map(l => (
          <div key={l} style={{
            padding: '8px 14px', background: '#fff', border: '1px solid var(--grid)',
            borderRadius: 999, fontSize: 11.5, fontWeight: 500, color: 'var(--charcoal)',
            cursor: 'default'
          }}>{l} →</div>
        ))}
      </div>
    </div>
  );
}

function RevByMonthChart() {
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const vals  = [3200, 2800, 4100, 5200, 4287, 0,0,0,0,0,0,0];
  const max = 6000;
  return (
    <div style={{ height: 160, display: 'flex', alignItems: 'flex-end', gap: 6, padding: '0 4px' }}>
      {months.map((m,i) => {
        const h = vals[i] / max * 130;
        const future = vals[i] === 0;
        return (
          <div key={m} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <div style={{ fontSize: 9, color: 'var(--muted)', fontWeight: 600 }}>
              {future ? '' : '$' + (vals[i]/1000).toFixed(1) + 'k'}
            </div>
            <div style={{
              width: '100%',
              height: future ? 4 : h,
              background: future
                ? 'repeating-linear-gradient(45deg,#EAE0CC 0 4px, transparent 4px 8px)'
                : i===4 ? 'var(--terracotta)' : 'var(--terracotta-3)',
              borderRadius: '3px 3px 0 0'
            }}></div>
            <div style={{ fontSize: 9.5, color: future ? '#b5ad9c' : 'var(--charcoal)', fontWeight: i===4 ? 700 : 500 }}>{m}</div>
          </div>
        );
      })}
    </div>
  );
}

function TopProducts() {
  const data = [
    {name: 'Lavender Soy Candle 8oz', val: 2840, pct: 92},
    {name: 'Cedar+Smoke Candle 8oz',  val: 2160, pct: 70},
    {name: 'Goat Milk Soap Trio',      val: 1840, pct: 60},
    {name: 'Brass Crescent Earrings',  val: 1420, pct: 46},
    {name: 'Wax Melt Sampler',         val: 1075, pct: 35},
  ];
  return (
    <div style={{ paddingTop: 4 }}>
      {data.map(d => (
        <div key={d.name} style={{ marginBottom: 8 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, marginBottom: 3 }}>
            <span style={{ color: 'var(--charcoal)', fontWeight: 500 }}>{d.name}</span>
            <span style={{ color: 'var(--charcoal)', fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>${d.val.toLocaleString()}</span>
          </div>
          <div className="bar-track" style={{height: 8}}>
            <div className="bar-fill" style={{ width: d.pct + '%' }}></div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ExpenseDonut() {
  // Build a donut using conic-gradient
  const segs = [
    { lbl: 'Materials', val: 42, color: '#C4714A' },
    { lbl: 'Platform Fees', val: 22, color: '#D4A843' },
    { lbl: 'Shipping', val: 18, color: '#7A9E7E' },
    { lbl: 'Booth/Events', val: 11, color: '#D4776A' },
    { lbl: 'Tools/Misc', val: 7, color: '#8AA3B0' },
  ];
  let acc = 0;
  const stops = segs.map(s => {
    const start = acc; acc += s.val; const end = acc;
    return `${s.color} ${start}% ${end}%`;
  }).join(', ');
  return (
    <div className="donut-wrap" style={{ paddingTop: 4 }}>
      <div style={{
        width: 120, height: 120, borderRadius: '50%',
        background: `conic-gradient(${stops})`,
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute', inset: 22, background: '#fff', borderRadius: '50%',
          display: 'grid', placeItems: 'center', textAlign: 'center'
        }}>
          <div>
            <div style={{ fontSize: 9, color: 'var(--muted)', letterSpacing: '0.1em', fontWeight: 600, textTransform: 'uppercase' }}>Total</div>
            <div style={{ fontFamily: 'Montserrat', fontWeight: 300, fontStyle: 'italic', fontSize: 20, color: 'var(--charcoal)' }}>$12.1k</div>
          </div>
        </div>
      </div>
      <div className="legend">
        {segs.map(s => (
          <div key={s.lbl} className="legend-item">
            <div className="legend-sq" style={{ background: s.color }}></div>
            <span style={{ color: 'var(--charcoal)' }}>{s.lbl}</span>
            <span style={{ color: 'var(--muted)', marginLeft: 'auto', fontWeight: 600 }}>{s.val}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, {
  TABS, ColHead, RowHead, Menubar, Toolbar, FormulaBar, TabBar,
  CommandDashboard, RevByMonthChart, TopProducts, ExpenseDonut
});
