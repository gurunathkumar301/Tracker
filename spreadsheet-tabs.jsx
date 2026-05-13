/* global React */
// More tabs: Instructions, Tax Estimator, Order Tracker, Event Dashboard, Pricing Calculator, Material Inventory, Platform Compare, Quick Entry, Calendar, Invoice

// ============ TAB 1: Instructions ============
function InstructionsTab() {
  return (
    <div style={{ padding: 32, height: '100%', overflow: 'hidden', background: 'var(--cream)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 28 }}>
        {/* Left — welcome */}
        <div>
          <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 11,
            letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terracotta)' }}>
            📘 &nbsp;Read me first
          </div>
          <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 38, lineHeight: 1.05, marginTop: 8, color: 'var(--charcoal)' }}>
            Welcome to your<br/>Business HQ.
          </div>
          <div style={{ width: 56, height: 2, background: 'var(--terracotta)', margin: '18px 0' }} />
          <div style={{ fontSize: 13, lineHeight: 1.6, color: '#3b3b3b', maxWidth: 460 }}>
            You're holding the operations brain of a real handmade business — bookkeeping,
            inventory, orders, craft fairs and tax prep, all wired together. Spend 10 minutes
            on <b>Setup</b>, then log a sale or expense. Every dashboard updates automatically.
          </div>

          <div style={{ marginTop: 24 }}>
            <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 10.5, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 10 }}>
              5-step Setup Checklist
            </div>
            {[
              ['Enter your business details on the Setup tab.', '⌗ Tab 2'],
              ['Add your products + COGS to the Order Setup tab.', '⌗ Tab 12'],
              ['List your raw materials on the Material Inventory tab.', '⌗ Tab 19'],
              ['Set your annual profit goal on the Command Dashboard.', '⌗ Tab 3'],
              ['Log your first sale or expense.', '⌗ Tabs 7 / 8'],
            ].map(([txt, ref], i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '28px 1fr auto', gap: 10, alignItems: 'center',
                padding: '8px 0', borderBottom: '1px solid var(--grid)'}}>
                <div style={{
                  width: 22, height: 22, border: '1.5px solid var(--charcoal)', borderRadius: 4,
                  display: 'grid', placeItems: 'center', fontSize: 11, fontWeight: 700, color: 'var(--charcoal)'
                }}>{i+1}</div>
                <div style={{ fontSize: 13, color: 'var(--charcoal)' }}>{txt}</div>
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10.5, color: 'var(--terracotta-2)' }}>{ref}</div>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: 22, padding: '12px 14px', background: 'var(--gold-wash)',
            border: '1px solid #E5CE82', borderRadius: 4, fontSize: 11.5, color: '#7C631A'
          }}>
            <b>Excel users:</b> Office 365 desktop is required for charts & dropdowns.
            On Mac, we recommend the Google Sheets version for full functionality.
          </div>
        </div>

        {/* Right — Tab map */}
        <div>
          <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 10.5, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 10 }}>
            What's inside — 28 tabs
          </div>
          <TabMapCompact />
          <div style={{
            display: 'flex', justifyContent: 'space-between', marginTop: 18, fontSize: 10.5, color: 'var(--muted)'
          }}>
            <span>v 1.0.2 &nbsp;·&nbsp; Released May 2026</span>
            <span>hello@business-hq.co</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function TabMapCompact() {
  // group + color
  const groups = [
    { lbl: 'Setup & Dashboards', color: '#8AA3B0', tabs: [1,2,3,4,5] },
    { lbl: 'Bookkeeping',        color: '#C4714A', tabs: [6,7,8,9,10,11] },
    { lbl: 'Orders & Sales',     color: '#7A9E7E', tabs: [12,13,14,15,16,17,18] },
    { lbl: 'Inventory',          color: '#D4A843', tabs: [19,20,21] },
    { lbl: 'Craft Fairs ★',      color: '#D4776A', tabs: [22,23,24] },
    { lbl: 'Tasks',              color: '#B79D7A', tabs: [25,26] },
    { lbl: 'Multi-Platform ★',   color: '#8AA3B0', tabs: [27,28] },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {groups.map(g => (
        <div key={g.lbl}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <div style={{ width: 14, height: 14, borderRadius: 3, background: g.color }} />
            <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 11, color: 'var(--charcoal)',
              letterSpacing: '0.04em' }}>{g.lbl}</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 4, paddingLeft: 22 }}>
            {g.tabs.map(idx => {
              const t = window.TABS.find(x => x.i === idx);
              return (
                <div key={idx} style={{
                  display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: 'var(--charcoal)'
                }}>
                  <span style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: 'var(--muted)' }}>
                    {String(idx).padStart(2,'0')}
                  </span>
                  <span>{t.name.replace(' ★','')}</span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

// ============ TAB 10: Quarterly Tax Estimator ============
function TaxEstimatorTab() {
  return (
    <div style={{ padding: 24, height: '100%', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 6 }}>
        <span style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 11,
          letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--terracotta)' }}>
          🏛️ &nbsp;Quarterly Tax Estimator
        </span>
        <span style={{ background: 'var(--terracotta)', color: '#fff', padding: '2px 8px',
          fontSize: 9, fontWeight: 700, letterSpacing: '0.14em', borderRadius: 2 }}>NEW</span>
      </div>
      <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 24, color: 'var(--charcoal)' }}>
        Avoid year-end tax shock.
      </div>
      <div style={{ fontSize: 12.5, color: 'var(--muted)', marginBottom: 18, maxWidth: 540 }}>
        Numbers pull live from your Income & Expense tabs. Adjust your tax bracket below
        to see your safe set-aside.
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {/* YTD pull */}
        <div className="card">
          <h4>YTD Pull-Through</h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', rowGap: 8, columnGap: 12, fontSize: 12 }}>
            <div style={{ color: 'var(--muted)' }}>YTD Revenue (Income Tracker)</div>
            <div style={{ fontVariantNumeric: 'tabular-nums', fontWeight: 600 }}>$28,940.00</div>
            <div style={{ color: 'var(--muted)' }}>YTD Deductible Expenses</div>
            <div style={{ fontVariantNumeric: 'tabular-nums', fontWeight: 600 }}>($12,087.40)</div>
            <div style={{ color: 'var(--muted)' }}>Mileage deduction (582 mi @ $0.70)</div>
            <div style={{ fontVariantNumeric: 'tabular-nums', fontWeight: 600 }}>($407.40)</div>
            <div style={{ color: 'var(--muted)' }}>Home office (12% × utilities/rent)</div>
            <div style={{ fontVariantNumeric: 'tabular-nums', fontWeight: 600 }}>($1,440.00)</div>
            <div style={{ borderTop: '1px solid var(--grid-2)', paddingTop: 8, fontFamily: 'Montserrat', fontWeight: 700, color: 'var(--charcoal)' }}>
              Net Profit (taxable)
            </div>
            <div style={{ borderTop: '1px solid var(--grid-2)', paddingTop: 8, fontFamily: 'Montserrat', fontWeight: 700,
              fontVariantNumeric: 'tabular-nums', color: 'var(--terracotta-2)' }}>$15,005.20</div>
          </div>
        </div>

        {/* Inputs */}
        <div className="card">
          <h4>Your Tax Profile</h4>
          <Field label="Filing status" val="Single" />
          <Field label="Federal tax bracket" val="22%" hint="(your marginal rate)" />
          <Field label="State (effective)" val="5.0% — Ohio" />
          <Field label="Self-employment tax" val="15.3% (FICA)" locked />
          <Field label="Safety buffer" val="+5% extra set-aside" />
        </div>
      </div>

      {/* Quarterly cards */}
      <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
        {[
          {q:'Q1', due:'Apr 15', amt: 1148, paid:true},
          {q:'Q2', due:'Jun 16', amt: 1390, paid:false, current: true},
          {q:'Q3', due:'Sep 15', amt: 1390, paid:false},
          {q:'Q4', due:'Jan 15', amt: 1390, paid:false},
        ].map(c => (
          <div key={c.q} style={{
            background: '#fff', border: '1px solid var(--grid)',
            borderRadius: 4, padding: '14px 16px',
            borderTop: '4px solid ' + (c.paid ? 'var(--sage)' : c.current ? 'var(--terracotta)' : 'var(--grid-2)')
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 13, color: 'var(--charcoal)' }}>{c.q}</span>
              <span className={'pill ' + (c.paid ? 'shipped' : c.current ? 'progress' : 'pending')} style={{ fontSize: 9.5 }}>
                {c.paid ? 'Paid' : c.current ? 'Due Next' : 'Upcoming'}
              </span>
            </div>
            <div style={{ fontSize: 10.5, color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 4 }}>
              Due {c.due}
            </div>
            <div style={{ fontFamily: 'Montserrat', fontWeight: 300, fontStyle: 'italic',
              fontSize: 30, marginTop: 8, color: 'var(--charcoal)' }}>
              ${c.amt.toLocaleString()}
            </div>
          </div>
        ))}
      </div>

      {/* Monthly set-aside callout + 1099-K */}
      <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 14 }}>
        <div style={{
          background: 'var(--terracotta)', color: '#fff', borderRadius: 4, padding: '16px 20px',
          display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center'
        }}>
          <div>
            <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 11,
              letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.85 }}>
              Set aside this much each month
            </div>
            <div style={{ fontFamily: 'Montserrat', fontWeight: 300, fontStyle: 'italic',
              fontSize: 44, marginTop: 6, lineHeight: 1 }}>$463<span style={{fontSize: 18, opacity: 0.7}}> / mo</span></div>
          </div>
          <div style={{ fontSize: 10.5, opacity: 0.85, maxWidth: 130, textAlign: 'right' }}>
            ≈ 27% of net profit. Move automatically to a separate "Tax Savings" account.
          </div>
        </div>

        <div className="card">
          <h4>1099-K Threshold Tracker</h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 64px', alignItems: 'center', gap: 10 }}>
            <div>
              <div style={{ fontSize: 10.5, color: 'var(--muted)', marginBottom: 2 }}>IRS threshold ($5,000 — 2026)</div>
              <div className="thermo-track"><div className="thermo-fill" style={{ width: '78%', background: 'var(--gold)' }}></div></div>
            </div>
            <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 13, color: '#8B7016' }}>78%</div>
            <div>
              <div style={{ fontSize: 10.5, color: 'var(--muted)', marginBottom: 2 }}>State threshold ($600)</div>
              <div className="thermo-track"><div className="thermo-fill" style={{ width: '100%', background: 'var(--rose)' }}></div></div>
            </div>
            <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 13, color: 'var(--rose)' }}>Hit</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, val, hint, locked }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: 8, marginBottom: 10 }}>
      <div>
        <div style={{ fontSize: 10.5, color: 'var(--muted)', letterSpacing: '0.06em', fontWeight: 600 }}>
          {label} {hint && <span style={{ color: 'var(--muted)', fontWeight: 400 }}>{hint}</span>}
        </div>
      </div>
      <div style={{
        padding: '4px 12px', background: locked ? '#F6F0E2' : 'var(--cream)', border: '1px solid var(--grid)',
        borderRadius: 3, fontSize: 12, fontWeight: 600, color: locked ? 'var(--muted)' : 'var(--charcoal)',
        minWidth: 140, textAlign: 'right', fontVariantNumeric: 'tabular-nums'
      }}>{val}{locked && ' 🔒'}</div>
    </div>
  );
}

// ============ TAB 18: Order Tracker ============
function OrderTrackerTab() {
  const rows = [
    ['#10428','May 13','Jenna R.','Etsy','Lavender Candle 8oz × 2','2','$48.00','$11.20','$36.80','progress','Shipped','1Z999AA10'],
    ['#10427','May 13','Marcus T.','Local Market','Goat Milk Soap Trio','1','$24.00','$8.10','$15.90','complete','Complete','—'],
    ['#10426','May 12','Sofia A.','Etsy','Cedar+Smoke 8oz','1','$28.00','$6.40','$21.60','shipped','Shipped','9405511899'],
    ['#10425','May 12','Heather B.','Instagram','Wax Melt Sampler × 3','3','$36.00','$9.90','$26.10','pending','Pending','—'],
    ['#10424','May 11','Ava D.','Etsy','Brass Crescent Earrings','1','$42.00','$8.80','$33.20','shipped','Shipped','1Z999AA10'],
    ['#10423','May 11','Daniel K.','Shopify','Lavender Candle × 1, Soap × 1','2','$48.00','$13.90','$34.10','progress','In Progress','—'],
    ['#10422','May 10','Lina M.','Etsy','Cedar+Smoke Candle × 2','2','$56.00','$12.80','$43.20','alert','Overdue','—'],
    ['#10421','May 10','Pia N.','Local Market','Wax Melt Sampler','1','$12.00','$3.30','$8.70','complete','Complete','—'],
    ['#10420','May 9','Robin S.','Etsy','Goat Milk Soap Trio × 2','2','$48.00','$16.20','$31.80','shipped','Shipped','9405511899'],
    ['#10419','May 9','Tasha L.','Etsy','Brass Earrings + Candle','2','$70.00','$15.20','$54.80','shipped','Shipped','1Z999AA10'],
    ['#10418','May 8','Beau F.','Shopify','Cedar+Smoke 4oz × 3','3','$54.00','$11.40','$42.60','shipped','Shipped','9405511899'],
    ['#10417','May 8','Iris W.','Etsy','Lavender Candle 8oz','1','$24.00','$5.60','$18.40','complete','Complete','—'],
  ];
  return (
    <div style={{ padding: 0, height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '18px 22px 12px', borderBottom: '1px solid var(--grid)', background: 'var(--cream)' }}>
        <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 11, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: 'var(--sage-2)' }}>
          ✅ &nbsp;Order Tracker
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginTop: 4 }}>
          <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 22, color: 'var(--charcoal)' }}>
            142 orders this month <span style={{color:'var(--muted)', fontSize: 12, fontWeight: 500}}>· $3,412 revenue</span>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ padding: '4px 10px', background: '#fff', border: '1px solid var(--grid)', borderRadius: 3, fontSize: 11 }}>
              Filter: All Platforms ▾
            </div>
            <div style={{ padding: '4px 10px', background: '#fff', border: '1px solid var(--grid)', borderRadius: 3, fontSize: 11 }}>
              Status: All ▾
            </div>
            <div style={{ padding: '4px 10px', background: 'var(--charcoal)', color: '#fff', borderRadius: 3, fontSize: 11, fontWeight: 600 }}>
              + New Order
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 18, marginTop: 14, fontSize: 11, color: 'var(--muted)' }}>
          <Stat label="Pending" val="8" color="var(--gold)" />
          <Stat label="In Progress" val="3" color="var(--terracotta)" />
          <Stat label="Shipped" val="12" color="var(--sage)" />
          <Stat label="Complete (MTD)" val="119" color="#5d6f3d" />
          <Stat label="Overdue" val="1" color="var(--rose)" />
          <div style={{ flex: 1 }} />
          <Stat label="Avg order value" val="$24.03" />
          <Stat label="Fulfillment rate" val="98.6%" />
        </div>
      </div>

      <div style={{ flex: 1, overflow: 'hidden', padding: '0 22px' }}>
        <table className="dtable" style={{ marginTop: 10 }}>
          <thead>
            <tr>
              <th>Order #</th><th>Date</th><th>Customer</th><th>Platform</th>
              <th>Products</th><th className="num">Qty</th>
              <th className="num">Revenue</th><th className="num">COGS</th><th className="num">Profit</th>
              <th>Status</th><th>Tracking #</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r,i) => (
              <tr key={i}>
                <td style={{ fontFamily: 'JetBrains Mono', color: 'var(--terracotta-2)', fontWeight: 600 }}>{r[0]}</td>
                <td>{r[1]}</td>
                <td>{r[2]}</td>
                <td>{r[3]}</td>
                <td style={{ color: 'var(--muted)' }}>{r[4]}</td>
                <td className="num">{r[5]}</td>
                <td className="num">{r[6]}</td>
                <td className="num" style={{ color: 'var(--muted)' }}>{r[7]}</td>
                <td className="num pos">{r[8]}</td>
                <td><span className={'pill ' + r[9]}>{r[10]}</span></td>
                <td style={{ fontFamily: 'JetBrains Mono', fontSize: 10.5, color: 'var(--muted)' }}>{r[11]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Stat({ label, val, color }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <span style={{ fontSize: 9.5, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 600 }}>{label}</span>
      <span style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 14,
        color: color || 'var(--charcoal)', fontVariantNumeric: 'tabular-nums' }}>{val}</span>
    </div>
  );
}

// ============ TAB 24: Event Dashboard ============
function EventDashboardTab() {
  const events = [
    { name: 'Lakewood Spring Market',     date: 'Mar 15', rev: 1280, exp: 195, profit: 1085 },
    { name: 'Tremont Arts Fest',          date: 'Mar 29', rev:  840, exp: 260, profit:  580 },
    { name: 'Cleveland Bazaar (April)',   date: 'Apr 12', rev: 2140, exp: 380, profit: 1760 },
    { name: 'Ohio City Maker Pop-up',     date: 'Apr 26', rev:  680, exp: 145, profit:  535 },
    { name: 'Mother\'s Day Market',       date: 'May 10', rev: 1820, exp: 220, profit: 1600 },
  ];
  const maxProfit = 2000;
  return (
    <div style={{ padding: 24, height: '100%', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 4 }}>
        <span style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 11,
          letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--rose)' }}>
          🎯 &nbsp;Event Dashboard
        </span>
        <span style={{ background: 'var(--rose)', color: '#fff', padding: '2px 8px',
          fontSize: 9, fontWeight: 700, letterSpacing: '0.14em', borderRadius: 2 }}>NEW SECTION</span>
      </div>
      <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 24, color: 'var(--charcoal)', marginBottom: 18 }}>
        Which markets are actually worth the booth fee?
      </div>

      {/* KPI cards */}
      <div className="kpi-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
        <div className="kpi" style={{ borderLeftColor: 'var(--rose)' }}>
          <span className="label">Events YTD</span>
          <span className="value">5</span>
          <span className="delta" style={{color: 'var(--muted)'}}>4 planned remaining</span>
        </div>
        <div className="kpi ok" style={{ borderLeftColor: 'var(--rose)' }}>
          <span className="label">Total Market Revenue</span>
          <span className="value">$6,760</span>
          <span className="delta">23% of YTD total</span>
        </div>
        <div className="kpi warn" style={{ borderLeftColor: 'var(--rose)' }}>
          <span className="label">Total Booth + Travel</span>
          <span className="value">$1,200</span>
          <span className="delta" style={{color: 'var(--muted)'}}>17.7% of event revenue</span>
        </div>
        <div className="kpi ok" style={{ borderLeftColor: 'var(--rose)' }}>
          <span className="label">Net Market Profit</span>
          <span className="value">$5,560</span>
          <span className="delta">$1,112 avg / event</span>
        </div>
      </div>

      {/* Bar chart */}
      <div className="card" style={{ marginTop: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
          <h4 style={{margin:0}}>Profit by Event — 2026</h4>
          <div style={{ display: 'flex', gap: 12, fontSize: 10.5, color: 'var(--muted)' }}>
            <div><span style={{display:'inline-block',width:10,height:10,background:'var(--sage)',marginRight:4,verticalAlign:'middle'}}></span>Revenue</div>
            <div><span style={{display:'inline-block',width:10,height:10,background:'var(--rose)',marginRight:4,verticalAlign:'middle'}}></span>Expenses</div>
            <div><span style={{display:'inline-block',width:10,height:10,background:'var(--terracotta)',marginRight:4,verticalAlign:'middle'}}></span>Net Profit</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 18, alignItems: 'flex-end', height: 170, padding: '0 10px' }}>
          {events.map(e => {
            const rh = (e.rev / 2400) * 140;
            const eh = (e.exp / 2400) * 140;
            const ph = (e.profit / 2400) * 140;
            return (
              <div key={e.name} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 140 }}>
                  <div style={{ width: 16, height: rh, background: 'var(--sage)', borderRadius: '3px 3px 0 0' }}></div>
                  <div style={{ width: 16, height: eh, background: 'var(--rose)', borderRadius: '3px 3px 0 0' }}></div>
                  <div style={{ width: 16, height: ph, background: 'var(--terracotta)', borderRadius: '3px 3px 0 0' }}></div>
                </div>
                <div style={{ fontSize: 10, color: 'var(--charcoal)', fontWeight: 600, marginTop: 8, textAlign: 'center', lineHeight: 1.3 }}>
                  {e.name}
                  <div style={{ color: 'var(--muted)', fontWeight: 400, fontSize: 9.5 }}>{e.date}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Best/worst callouts */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 14 }}>
        <div style={{ background: 'var(--sage)', color: '#fff', borderRadius: 4, padding: '16px 18px' }}>
          <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 10.5,
            letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.9 }}>
            ⭐ Best-performing event
          </div>
          <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 20, marginTop: 6 }}>
            Cleveland Bazaar (April)
          </div>
          <div style={{ fontSize: 12, opacity: 0.92, marginTop: 4 }}>
            $1,760 net profit · 82% margin · do this one again.
          </div>
        </div>
        <div style={{ background: '#fff', border: '1px solid var(--grid)', borderRadius: 4, padding: '16px 18px' }}>
          <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 10.5,
            letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)' }}>
            Worst margin
          </div>
          <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 20, marginTop: 6, color: 'var(--charcoal)' }}>
            Tremont Arts Fest
          </div>
          <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 4 }}>
            69% margin — high booth fee ($180) vs. foot traffic. Reconsider for 2027.
          </div>
        </div>
      </div>
    </div>
  );
}

// ============ TAB 16: Pricing Calculator ============
function PricingCalcTab() {
  return (
    <div style={{ padding: 24, height: '100%', overflow: 'hidden' }}>
      <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 11, letterSpacing: '0.16em',
        textTransform: 'uppercase', color: 'var(--sage-2)' }}>
        🏷️ &nbsp;Pricing Calculator
      </div>
      <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 22, color: 'var(--charcoal)', marginTop: 4, marginBottom: 18 }}>
        Price like you mean it.
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 18 }}>
        {/* Inputs */}
        <div className="card">
          <h4>Inputs — Lavender Soy Candle 8oz</h4>
          <PriceInput lbl="Material cost / unit" val="$3.40" />
          <PriceInput lbl="Labor — rate" val="$22.00 / hr" />
          <PriceInput lbl="Labor — time per unit" val="18 min (0.30 hr)" />
          <PriceInput lbl="Overhead %" val="12%" />
          <PriceInput lbl="Platform fee %" val="Etsy 6.5%" />
          <PriceInput lbl="Shipping" val="$4.20 (paid by buyer)" />
          <PriceInput lbl="Target profit margin" val="55%" highlight />
        </div>

        {/* Outputs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{
            background: 'var(--charcoal)', color: '#fff', borderRadius: 4, padding: '20px 24px',
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14
          }}>
            <div>
              <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 10.5,
                letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.7 }}>Suggested retail</div>
              <div style={{ fontFamily: 'Montserrat', fontWeight: 300, fontStyle: 'italic',
                fontSize: 46, marginTop: 4, lineHeight: 1 }}>$24.00</div>
              <div style={{ fontSize: 11.5, opacity: 0.7, marginTop: 4 }}>round up from $22.86</div>
            </div>
            <div>
              <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 10.5,
                letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.7 }}>Profit per sale</div>
              <div style={{ fontFamily: 'Montserrat', fontWeight: 300, fontStyle: 'italic',
                fontSize: 46, marginTop: 4, color: 'var(--terracotta-3)', lineHeight: 1 }}>$13.32</div>
              <div style={{ fontSize: 11.5, opacity: 0.7, marginTop: 4 }}>55.5% margin · break-even: 1 unit</div>
            </div>
          </div>

          <div className="card">
            <h4>Cost breakdown</h4>
            <Breakdown />
          </div>

          <div className="card">
            <h4>Price ladder</h4>
            <PriceLadder />
          </div>
        </div>
      </div>
    </div>
  );
}

function PriceInput({ lbl, val, highlight }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: 8,
      padding: '8px 10px', background: highlight ? 'var(--terracotta-wash)' : 'transparent',
      borderRadius: 3, marginBottom: 2,
      border: highlight ? '1px solid var(--terracotta-3)' : '1px solid transparent'
    }}>
      <div style={{ fontSize: 11.5, color: highlight ? 'var(--terracotta-2)' : 'var(--charcoal)',
        fontWeight: highlight ? 600 : 500 }}>{lbl}</div>
      <div style={{
        padding: '4px 12px', background: '#fff', border: '1px solid var(--grid)',
        borderRadius: 3, fontSize: 12, fontWeight: 600, minWidth: 140, textAlign: 'right',
        fontVariantNumeric: 'tabular-nums', color: 'var(--charcoal)'
      }}>{val}</div>
    </div>
  );
}

function Breakdown() {
  const items = [
    { lbl: 'Materials', val: 3.40, pct: 32 },
    { lbl: 'Labor (0.30 hr × $22)', val: 6.60, pct: 62 },
    { lbl: 'Overhead (12%)', val: 1.20, pct: 11 },
    { lbl: 'Platform fee (6.5%)', val: 1.56, pct: 15 },
  ];
  return (
    <div>
      {items.map(i => (
        <div key={i.lbl} className="bar-row" style={{ gridTemplateColumns: '120px 1fr 60px' }}>
          <div className="lbl" style={{ textAlign: 'left' }}>{i.lbl}</div>
          <div className="bar-track"><div className="bar-fill" style={{ width: (i.pct * 1.5) + '%' }}></div></div>
          <div className="val">${i.val.toFixed(2)}</div>
        </div>
      ))}
    </div>
  );
}

function PriceLadder() {
  const ladder = [
    { margin: '40%', price: '$19.50', note: 'too cheap' },
    { margin: '50%', price: '$22.00', note: 'safe' },
    { margin: '55%', price: '$24.00', note: 'recommended', star: true },
    { margin: '60%', price: '$27.00', note: 'premium tier' },
    { margin: '70%', price: '$33.00', note: 'gift-shop ceiling' },
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8 }}>
      {ladder.map(l => (
        <div key={l.margin} style={{
          padding: '10px 8px', background: l.star ? 'var(--terracotta-wash)' : '#fff',
          border: '1px solid ' + (l.star ? 'var(--terracotta)' : 'var(--grid)'),
          borderRadius: 4, textAlign: 'center'
        }}>
          <div style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>{l.margin}</div>
          <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 16, color: l.star ? 'var(--terracotta-2)' : 'var(--charcoal)', marginTop: 4 }}>{l.price}</div>
          <div style={{ fontSize: 10, color: 'var(--muted)', marginTop: 2 }}>{l.note}</div>
        </div>
      ))}
    </div>
  );
}

// ============ TAB 19: Material Inventory ============
function MaterialInventoryTab() {
  const mats = [
    ['Soy wax flakes (10 lb bag)','Candle Science','lb', 14.2, 5, 20, '$3.40','$48.28','ok'],
    ['Cotton wicks #6 (100 ct)','Bramble Berry','ea', 142, 50, 200, '$0.08','$11.36','ok'],
    ['Lavender essential oil','New Directions','oz', 6.0, 4, 8, '$3.20','$19.20','low'],
    ['Amber 8oz jars','SKS Bottle','ea', 18, 24, 48, '$1.10','$19.80','low'],
    ['Aluminum lids 70/400','SKS Bottle','ea', 240, 50, 100, '$0.42','$100.80','ok'],
    ['Goat milk soap base (25 lb)','Soap Goods','lb', 4.5, 8, 25, '$4.80','$21.60','out'],
    ['Kraft mailer boxes 6×6×3','Uline','ea', 38, 25, 50, '$0.86','$32.68','ok'],
    ['Tissue paper sheets','Nashville Wraps','ea', 480, 100, 250, '$0.04','$19.20','ok'],
    ['Cedarwood essential oil','New Directions','oz', 11.5, 4, 8, '$2.80','$32.20','ok'],
    ['Brass earring hooks','Etsy supplier','pr', 86, 40, 100, '$0.32','$27.52','ok'],
    ['Polyethylene shrink wrap','Uline','ft', 320, 100, 250, '$0.04','$12.80','ok'],
    ['Thank-you cards','Moo','ea', 22, 50, 200, '$0.18','$3.96','out'],
  ];

  return (
    <div style={{ padding: 0, height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '18px 22px 12px', borderBottom: '1px solid var(--grid)', background: 'var(--cream)' }}>
        <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 11, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: '#9C7A21' }}>
          🧶 &nbsp;Material Inventory
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginTop: 4 }}>
          <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 22, color: 'var(--charcoal)' }}>
            12 raw materials &nbsp;<span style={{color:'var(--muted)', fontSize: 12, fontWeight: 500}}>
              · $349.40 on-hand value
            </span>
          </div>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            <Stat label="Low stock" val="2" color="#9C7A21" />
            <Stat label="Out of stock" val="2" color="var(--rose)" />
            <div style={{ padding: '4px 10px', background: 'var(--charcoal)', color: '#fff', borderRadius: 3, fontSize: 11, fontWeight: 600 }}>
              📥 Generate Reorder List
            </div>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, overflow: 'hidden', padding: '0 22px' }}>
        <table className="dtable" style={{ marginTop: 10 }}>
          <thead>
            <tr>
              <th>Material</th><th>Supplier</th><th>Unit</th>
              <th className="num">On Hand</th><th className="num">Reorder Pt</th><th className="num">Reorder Qty</th>
              <th className="num">$ / Unit</th><th className="num">Total Value</th><th>Status</th>
            </tr>
          </thead>
          <tbody>
            {mats.map((m,i) => {
              const stat = m[8];
              return (
                <tr key={i} style={{
                  background: stat === 'out' ? 'var(--rose-wash)' : stat === 'low' ? 'var(--gold-wash)' : undefined
                }}>
                  <td style={{ fontWeight: 500 }}>{m[0]}</td>
                  <td style={{ color: 'var(--muted)' }}>{m[1]}</td>
                  <td>{m[2]}</td>
                  <td className="num">{m[3]}</td>
                  <td className="num" style={{ color: 'var(--muted)' }}>{m[4]}</td>
                  <td className="num" style={{ color: 'var(--muted)' }}>{m[5]}</td>
                  <td className="num">{m[6]}</td>
                  <td className="num" style={{ fontWeight: 600 }}>{m[7]}</td>
                  <td>
                    <span className={'pill ' + (stat === 'out' ? 'alert' : stat === 'low' ? 'pending' : 'shipped')}>
                      {stat === 'out' ? '⚠ Reorder now' : stat === 'low' ? '◐ Low' : '● In stock'}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ============ TAB 27: Platform Comparison ============
function PlatformCompareTab() {
  const platforms = [
    { name: 'Etsy',      color: '#C4714A', rev: 18420, fees: 2880, net: 11540, margin: 62.6 },
    { name: 'Shopify',   color: '#7A9E7E', rev:  4280, fees:  380, net:  2680, margin: 62.6 },
    { name: 'Craft Fairs',color: '#D4776A', rev: 6760, fees: 1200, net:  5560, margin: 82.2 },
    { name: 'Instagram', color: '#D4A843', rev:  1480, fees:    0, net:  1060, margin: 71.6 },
  ];
  const max = 20000;
  return (
    <div style={{ padding: 24, height: '100%', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
        <span style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 11, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: '#5C7886' }}>
          ⚖️ &nbsp;Platform Comparison
        </span>
        <span style={{ background: '#5C7886', color: '#fff', padding: '2px 8px',
          fontSize: 9, fontWeight: 700, letterSpacing: '0.14em', borderRadius: 2 }}>NEW</span>
      </div>
      <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 22, color: 'var(--charcoal)', marginTop: 4 }}>
        Where is your time best spent?
      </div>

      {/* Recommendation banner */}
      <div style={{
        marginTop: 16, padding: '14px 18px', background: 'var(--sage)',
        color: '#fff', borderRadius: 4,
        display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 14, alignItems: 'center'
      }}>
        <div style={{ width: 38, height: 38, background: 'rgba(255,255,255,0.18)', borderRadius: 50,
          display: 'grid', placeItems: 'center', fontSize: 20 }}>★</div>
        <div>
          <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 10.5,
            letterSpacing: '0.16em', textTransform: 'uppercase', opacity: 0.85 }}>Your most profitable platform</div>
          <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 20, marginTop: 4 }}>
            Craft Fairs &nbsp;<span style={{ fontWeight: 400, fontSize: 13, opacity: 0.92 }}>— 82.2% margin · $5,560 net YTD</span>
          </div>
        </div>
        <div style={{ fontSize: 11, opacity: 0.85, maxWidth: 240, textAlign: 'right' }}>
          You earn <b>$1,112</b> avg per market day. Etsy delivers volume, but craft fairs deliver margin — book more.
        </div>
      </div>

      {/* Table */}
      <div className="card" style={{ marginTop: 16, padding: 0, overflow: 'hidden' }}>
        <table className="dtable" style={{ marginTop: 0 }}>
          <thead>
            <tr>
              <th>Platform</th>
              <th className="num">Revenue YTD</th>
              <th>Revenue share</th>
              <th className="num">Fees</th>
              <th className="num">Net Profit</th>
              <th className="num">Margin</th>
              <th>Recommendation</th>
            </tr>
          </thead>
          <tbody>
            {platforms.map(p => (
              <tr key={p.name}>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 10, height: 10, borderRadius: 2, background: p.color }} />
                    <span style={{ fontWeight: 600 }}>{p.name}</span>
                  </div>
                </td>
                <td className="num" style={{ fontWeight: 600 }}>${p.rev.toLocaleString()}</td>
                <td>
                  <div className="bar-track" style={{ height: 10, maxWidth: 200 }}>
                    <div className="bar-fill" style={{ width: (p.rev / max * 100) + '%', background: p.color }}></div>
                  </div>
                </td>
                <td className="num">${p.fees.toLocaleString()}</td>
                <td className="num pos">${p.net.toLocaleString()}</td>
                <td className="num" style={{ fontWeight: 700, color: p.margin > 70 ? 'var(--sage-2)' : 'var(--charcoal)' }}>
                  {p.margin.toFixed(1)}%
                </td>
                <td style={{ fontSize: 11.5, color: 'var(--muted)' }}>
                  {p.name === 'Craft Fairs' && 'Double down — book Q3/Q4 events now.'}
                  {p.name === 'Etsy' && 'Steady traffic. Raise prices 8–10%.'}
                  {p.name === 'Shopify' && 'Underused. Drive IG traffic here.'}
                  {p.name === 'Instagram' && 'High margin, low scale. Add a "DM to buy" stickers.'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginTop: 14 }}>
        <Mini lbl="Total revenue YTD" val="$30.9k" />
        <Mini lbl="Total fees paid" val="$4,460" sub="14.4% of revenue" />
        <Mini lbl="Blended margin" val="65.4%" />
        <Mini lbl="Time-adjusted $/hr"  val="$38.20" sub="craft fairs lead" />
      </div>
    </div>
  );
}

function Mini({ lbl, val, sub }) {
  return (
    <div className="card" style={{ padding: 12 }}>
      <div style={{ fontSize: 10.5, color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>{lbl}</div>
      <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 18, color: 'var(--charcoal)', marginTop: 4 }}>{val}</div>
      {sub && <div style={{ fontSize: 10.5, color: 'var(--muted)', marginTop: 2 }}>{sub}</div>}
    </div>
  );
}

// ============ TAB 28: Quick Entry ============
function QuickEntryTab() {
  return (
    <div style={{ padding: '0', height: '100%', overflow: 'hidden', background: 'var(--cream)' }}>
      <div style={{ background: 'var(--terracotta)', color: '#fff', padding: '14px 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 11,
            letterSpacing: '0.16em', textTransform: 'uppercase', opacity: 0.85 }}>⚡ Quick Entry · Mobile-friendly</div>
          <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 18, marginTop: 2 }}>
            Log here on mobile. Dashboards update automatically.
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.15)', borderRadius: 3, fontSize: 12, fontWeight: 600 }}>📱 Add to home screen</div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 0, height: 'calc(100% - 64px)' }}>
        {/* Form */}
        <div style={{ padding: '32px 28px', borderRight: '1px solid var(--grid)' }}>
          <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 10.5,
            letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 }}>
            New entry
          </div>
          <BigField lbl="Date" val="May 13, 2026" />
          <BigField lbl="Type" val="Sale ▾" choices={['Sale','Expense']} />
          <BigField lbl="Amount" val="$28.00" big />
          <BigField lbl="Platform" val="Etsy ▾" choices={['Etsy','Shopify','Local','Instagram','Other']} />
          <BigField lbl="Notes (optional)" val="Cedar+Smoke 8oz — repeat customer" />

          <div style={{ marginTop: 18, display: 'flex', gap: 10 }}>
            <div style={{ flex: 1, padding: '14px', background: 'var(--charcoal)', color: '#fff',
              borderRadius: 4, textAlign: 'center', fontFamily: 'Montserrat',
              fontWeight: 700, fontSize: 13, letterSpacing: '0.05em' }}>
              ✓ Log entry
            </div>
            <div style={{ padding: '14px 18px', background: '#fff', border: '1px solid var(--grid)',
              borderRadius: 4, fontFamily: 'Montserrat', fontWeight: 600, fontSize: 13, color: 'var(--charcoal)' }}>
              Clear
            </div>
          </div>
        </div>

        {/* Recent entries */}
        <div style={{ padding: '32px 28px', background: '#fff' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
            <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 10.5,
              letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)' }}>Today's entries</div>
            <div style={{ fontSize: 11, color: 'var(--sage-2)' }}>● Synced 4 sec ago</div>
          </div>
          {[
            ['10:42 AM','Sale','$28.00','Etsy','Cedar+Smoke 8oz','sale'],
            ['10:18 AM','Sale','$48.00','Etsy','Lavender × 2','sale'],
            ['09:55 AM','Expense','$14.20','—','USPS postage','exp'],
            ['09:30 AM','Sale','$36.00','Instagram','Wax melt sampler × 3','sale'],
            ['08:50 AM','Expense','$62.40','—','Soy wax — Candle Science','exp'],
            ['08:12 AM','Sale','$24.00','Etsy','Goat milk soap trio','sale'],
          ].map((r,i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '70px 1fr auto', gap: 12, alignItems: 'center',
              padding: '10px 12px', borderBottom: '1px solid var(--grid)',
              background: i===0 ? 'var(--terracotta-wash)' : 'transparent', borderRadius: i===0 ? 4 : 0
            }}>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: 'var(--muted)' }}>{r[0]}</div>
              <div>
                <div style={{ fontSize: 12.5, fontWeight: 500, color: 'var(--charcoal)' }}>{r[4]}</div>
                <div style={{ fontSize: 10.5, color: 'var(--muted)' }}>{r[1]} · {r[3]}</div>
              </div>
              <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 14,
                color: r[5]==='sale' ? 'var(--sage-2)' : 'var(--rose)',
                fontVariantNumeric: 'tabular-nums' }}>
                {r[5]==='sale' ? '+' : '−'}{r[2]}
              </div>
            </div>
          ))}
          <div style={{
            marginTop: 16, padding: '12px 14px', background: 'var(--cream-2)',
            border: '1px solid var(--grid)', borderRadius: 4, display: 'flex',
            justifyContent: 'space-between', fontSize: 12
          }}>
            <span style={{ color: 'var(--muted)' }}>Today net</span>
            <span style={{ fontFamily: 'Montserrat', fontWeight: 700, color: 'var(--sage-2)' }}>+$59.40</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function BigField({ lbl, val, big, choices }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 10,
        letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 4 }}>{lbl}</div>
      <div style={{
        padding: big ? '14px 18px' : '12px 16px', background: '#fff', border: '1.5px solid var(--grid)',
        borderRadius: 4, fontSize: big ? 26 : 14,
        fontFamily: big ? 'Montserrat' : 'Inter',
        fontWeight: big ? 700 : 500,
        color: 'var(--charcoal)'
      }}>{val}</div>
      {choices && (
        <div style={{ display: 'flex', gap: 6, marginTop: 6 }}>
          {choices.map(c => (
            <div key={c} style={{
              padding: '4px 10px', fontSize: 10.5, borderRadius: 3,
              background: c === val.replace(' ▾','') ? 'var(--terracotta)' : '#fff',
              color: c === val.replace(' ▾','') ? '#fff' : 'var(--muted)',
              border: '1px solid var(--grid)', fontWeight: 600
            }}>{c}</div>
          ))}
        </div>
      )}
    </div>
  );
}

// ============ TAB 5: Calendar ============
function CalendarTab() {
  // build May 2026 (starts Friday). 31 days.
  const days = [];
  // 5 empty leading days for Sun..Thu before May 1 (Fri)
  for (let i=0;i<5;i++) days.push({ empty: true });
  // generate amounts: mix of small positives, occasional negatives/big positives
  const presets = {
    1: 64, 2: 240, 3: 0, 4: 28, 5: -42,
    6: 48, 7: 32, 8: 56, 9: 480, 10: 1820,
    11: -180, 12: 124, 13: 92, 14: 36, 15: -64,
    16: 280, 17: 88, 18: 24, 19: -22, 20: 156,
    21: 48, 22: 92, 23: 320, 24: 380, 25: 0,
    26: -88, 27: 64, 28: 124, 29: 220, 30: 380, 31: 96
  };
  for (let d=1; d<=31; d++) {
    const amt = presets[d] || 0;
    days.push({ d, amt });
  }
  return (
    <div style={{ padding: 24, height: '100%', overflow: 'hidden', display:'flex',flexDirection:'column' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 11,
            letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--terracotta)' }}>
            📅 &nbsp;Cash-Flow Calendar
          </div>
          <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 22, color: 'var(--charcoal)', marginTop: 4 }}>
            May 2026
          </div>
        </div>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
          <Legend color="var(--sage-wash)" label="Income > Expenses" />
          <Legend color="var(--rose-wash)" label="Expenses > Income" />
          <Legend color="var(--sage)" label="Best day" textColor="#fff" />
          <div style={{ padding: '4px 10px', background: '#fff', border: '1px solid var(--grid)', borderRadius: 3, fontSize: 11 }}>
            ← Apr &nbsp; May ▾ &nbsp; Jun →
          </div>
        </div>
      </div>

      <div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4, fontSize: 10, color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
        {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => <div key={d} style={{ padding: '4px 6px' }}>{d}</div>)}
      </div>
      <div className="cal-month" style={{ marginTop: 4, flex: 1 }}>
        {days.map((c, i) => {
          if (c.empty) return <div key={i} className="cal-day muted"></div>;
          const pos = c.amt > 0;
          const neg = c.amt < 0;
          const big = c.amt >= 1000;
          return (
            <div key={i} className={'cal-day ' + (big ? 'big-pos' : pos ? 'pos' : neg ? 'neg' : '')}>
              <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 11,
                color: big ? '#fff' : (pos ? 'var(--sage-2)' : neg ? '#A2554B' : 'var(--charcoal)') }}>
                {c.d}
              </div>
              {c.amt !== 0 && (
                <div className="amt">{c.amt > 0 ? '+' : ''}${Math.abs(c.amt).toLocaleString()}</div>
              )}
            </div>
          );
        })}
      </div>

      {/* footer stats */}
      <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
        <Mini lbl="Income — May" val="$4,287" sub="22 days active" />
        <Mini lbl="Expenses — May" val="$1,612" sub="6 days outflow" />
        <Mini lbl="Best single day" val="$1,820" sub="May 10 · Market" />
        <Mini lbl="Daily avg net" val="+$86.30" />
      </div>
    </div>
  );
}

function Legend({ color, label, textColor }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: 'var(--charcoal)' }}>
      <div style={{ width: 14, height: 14, background: color, borderRadius: 2 }}></div>
      <span>{label}</span>
    </div>
  );
}

// ============ TAB 21: Invoice Generator ============
function InvoiceGeneratorTab() {
  const items = [
    ['Lavender Soy Candle 8oz', 6, 24.00, 144.00],
    ['Cedar+Smoke Candle 8oz',  3, 28.00,  84.00],
    ['Goat Milk Soap Trio',     4, 24.00,  96.00],
    ['Wax Melt Sampler',        8, 12.00,  96.00],
  ];
  const sub = 420.00;
  const tax = 32.55;
  const total = 452.55;

  return (
    <div style={{ padding: '24px', height: '100%', overflow: 'hidden', background: 'var(--cream)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
        <div>
          <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 11,
            letterSpacing: '0.16em', textTransform: 'uppercase', color: '#9C7A21' }}>
            📄 &nbsp;Invoice Generator
          </div>
          <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 18, color: 'var(--charcoal)', marginTop: 2 }}>
            Wholesale invoice — Briar &amp; Stem Boutique
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={{ padding: '4px 10px', background: '#fff', border: '1px solid var(--grid)', borderRadius: 3, fontSize: 11 }}>📋 Duplicate</div>
          <div style={{ padding: '4px 10px', background: 'var(--charcoal)', color: '#fff', borderRadius: 3, fontSize: 11, fontWeight: 600 }}>🖨 Print / PDF</div>
        </div>
      </div>

      {/* Invoice page */}
      <div style={{
        background: '#fff', borderRadius: 4, padding: '36px 44px',
        boxShadow: 'var(--paper-shadow)', maxWidth: 880, margin: '0 auto',
        height: 'calc(100% - 60px)', overflow: 'hidden'
      }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ width: 60, height: 60, background: 'var(--terracotta)', borderRadius: 12,
              display: 'grid', placeItems: 'center', color: '#fff', fontFamily: 'Montserrat',
              fontWeight: 700, fontSize: 24 }}>M</div>
            <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 18, marginTop: 10, color: 'var(--charcoal)' }}>
              Maya & Wick Candle Co.
            </div>
            <div style={{ fontSize: 11.5, color: 'var(--muted)', lineHeight: 1.5, marginTop: 2 }}>
              1428 W 25th St, Cleveland OH 44113<br/>
              hello@mayaandwick.com · 216-555-0192<br/>
              EIN 87-1234567
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 28, letterSpacing: '0.04em', color: 'var(--terracotta)' }}>INVOICE</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', gap: '4px 14px',
              marginTop: 8, fontSize: 11.5, textAlign: 'right' }}>
              <span style={{ color: 'var(--muted)' }}>Invoice #</span><span style={{ fontWeight: 600 }}>2026-0048</span>
              <span style={{ color: 'var(--muted)' }}>Date</span><span style={{ fontWeight: 600 }}>May 13, 2026</span>
              <span style={{ color: 'var(--muted)' }}>Due</span><span style={{ fontWeight: 600 }}>Jun 12, 2026</span>
              <span style={{ color: 'var(--muted)' }}>Terms</span><span style={{ fontWeight: 600 }}>Net 30</span>
            </div>
          </div>
        </div>

        <div style={{ height: 2, background: 'var(--terracotta)', width: 56, margin: '20px 0 16px' }}></div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 18 }}>
          <div>
            <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 10,
              letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 4 }}>Bill to</div>
            <div style={{ fontSize: 12.5, lineHeight: 1.55, color: 'var(--charcoal)' }}>
              <b>Briar &amp; Stem Boutique</b><br/>
              Attn: Hana Walsh<br/>
              812 Detroit Ave, Lakewood OH 44107<br/>
              hana@briarandstem.com
            </div>
          </div>
          <div>
            <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 10,
              letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 4 }}>Ship to</div>
            <div style={{ fontSize: 12.5, lineHeight: 1.55, color: 'var(--charcoal)' }}>
              Same as billing<br/>
              <span style={{ color: 'var(--muted)' }}>Carrier: UPS Ground · Est. May 16</span>
            </div>
          </div>
        </div>

        <table className="dtable" style={{ marginBottom: 16 }}>
          <thead>
            <tr>
              <th style={{ width: '50%' }}>Item</th>
              <th className="num">Qty</th>
              <th className="num">Unit</th>
              <th className="num">Amount</th>
            </tr>
          </thead>
          <tbody>
            {items.map((row,i) => (
              <tr key={i}>
                <td style={{ fontWeight: 500 }}>{row[0]}</td>
                <td className="num">{row[1]}</td>
                <td className="num">${row[2].toFixed(2)}</td>
                <td className="num" style={{ fontWeight: 600 }}>${row[3].toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 24 }}>
          <div>
            <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 10,
              letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 4 }}>Notes</div>
            <div style={{ fontSize: 11.5, color: '#3b3b3b', lineHeight: 1.55 }}>
              Thank you for placing wholesale order #2026-0048. Wholesale pricing is 50% off
              MSRP, MOQ of 6 per SKU. Please remit by ACH (preferred) or check to the address above.
            </div>
          </div>
          <div style={{ background: 'var(--cream)', borderRadius: 4, padding: 14 }}>
            <Row k="Subtotal" v={`$${sub.toFixed(2)}`} />
            <Row k="Sales tax (7.75%)" v={`$${tax.toFixed(2)}`} />
            <Row k="Shipping" v="Included" muted />
            <div style={{ height: 1, background: 'var(--grid-2)', margin: '6px 0' }}></div>
            <Row k="Total due" v={`$${total.toFixed(2)}`} bold />
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({ k, v, bold, muted }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '4px 0', fontSize: bold ? 14 : 12,
      fontFamily: bold ? 'Montserrat' : 'Inter',
      fontWeight: bold ? 700 : 500,
      color: muted ? 'var(--muted)' : 'var(--charcoal)' }}>
      <span>{k}</span>
      <span style={{ fontVariantNumeric: 'tabular-nums' }}>{v}</span>
    </div>
  );
}

Object.assign(window, {
  InstructionsTab, TaxEstimatorTab, OrderTrackerTab, EventDashboardTab,
  PricingCalcTab, MaterialInventoryTab, PlatformCompareTab, QuickEntryTab,
  CalendarTab, InvoiceGeneratorTab
});
