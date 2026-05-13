/* global React */

// ===== Spreadsheet Frame: wraps a single tab in Google Sheets chrome =====
function SpreadsheetFrame({ activeTab, tabContent, cellRef, formula, label }) {
  return (
    <div className="sheet" data-screen-label={label}>
      <Menubar />
      <Toolbar />
      <FormulaBar cellRef={cellRef} formula={formula} />
      <div className="stage">
        <ColHead cols={20} />
        <div className="body">
          <div className="body-inner">
            <RowHead rows={42} />
            <div className="canvas">
              {tabContent}
            </div>
          </div>
        </div>
      </div>
      <TabBar active={activeTab} onSelect={()=>{}} />
    </div>
  );
}

// ===== Print page wrappers =====
function PrintFooter({ left, right }) {
  return (
    <footer className="foot">
      <span>{left}</span>
      <span>{right}</span>
    </footer>
  );
}

// ===== Cover PDF: Google Sheets Link =====
function CoverGoogleSheetsLink() {
  return (
    <div className="page" data-screen-label="PDF: Google Sheets Link">
      <div style={{ display:'flex', alignItems:'center', gap: 14 }}>
        <div className="cover-mark">B</div>
        <div>
          <div className="eyebrow" style={{margin:0}}>Business HQ · v1.0.2</div>
          <div style={{ fontSize: 12, color: 'var(--muted)' }}>For Etsy & craft-fair sellers</div>
        </div>
      </div>

      <h1 style={{marginTop: 42, fontSize: 44}}>
        Your spreadsheet<br/>is ready inside.
      </h1>
      <div className="rule terra" style={{marginTop: 22}}></div>
      <p style={{ fontSize: 13.5, maxWidth: 600 }}>
        Below is your private link to the Google Sheets master template. Open it, make
        your own copy, and you'll be set up in under 10 minutes.
      </p>

      {/* Link box */}
      <div className="link-box" style={{marginTop: 22}}>
        <div>
          <div style={{ fontFamily:'Montserrat', fontWeight:700, fontSize: 10,
            letterSpacing: '0.16em', textTransform:'uppercase', color: 'var(--muted)' }}>
            Master template link
          </div>
          <div className="url" style={{ marginTop: 4 }}>
            docs.google.com/spreadsheets/d/1xQ-bhHQc4-businesshq-template/view
          </div>
        </div>
        <div className="cta">Open in Sheets →</div>
      </div>

      <h2 style={{marginTop: 36}}>Setup in 5 steps</h2>
      <div className="rule" style={{margin:'4px 0 16px', width: 36, height: 2, background: 'var(--terracotta)'}}></div>

      {[
        ['Open the link above.','You\'ll land in "view only" mode. That\'s expected.'],
        ['Click File → Make a copy.','Name it "[Your Business] HQ 2026". Save to your Drive.'],
        ['Open the Setup tab (Tab 2).','Enter business name, currency, fiscal year and your sales platforms.'],
        ['Visit Order Setup (Tab 12).','Paste in your products, SKUs, prices and COGS. The dropdowns everywhere else populate from this.'],
        ['Log one sale on Tab 7 (Income).','Watch the Command Dashboard light up. You\'re done.'],
      ].map(([t,d], i) => (
        <div key={i} className="step">
          <div className="n">{i+1}</div>
          <div className="body">
            <strong>{t}</strong>
            <p>{d}</p>
          </div>
        </div>
      ))}

      <div style={{
        marginTop: 18, padding: '14px 16px', background: 'var(--terracotta-wash)',
        border: '1px solid var(--terracotta-3)', borderRadius: 4, fontSize: 12,
        color: 'var(--terracotta-2)', display: 'flex', gap: 10, alignItems: 'flex-start'
      }}>
        <div style={{ fontFamily:'Montserrat', fontWeight:700 }}>!</div>
        <div>
          <b>One-time only:</b> the link gives view-only access. Your copy is private and
          fully editable. Never edit the master template — it's shared with every buyer.
        </div>
      </div>

      <PrintFooter left="Business HQ · Setup PDF" right="Page 1 of 1 · v1.0.2" />
    </div>
  );
}

// ===== Quick Start Guide — 4 pages =====
function QuickStartP1() {
  return (
    <div className="page" data-screen-label="QuickStart p1">
      <div className="eyebrow">Quick start · page 1 of 4</div>
      <h1>What's inside.</h1>
      <div className="rule terra"></div>
      <p style={{maxWidth: 600}}>
        Twenty-eight tabs, six sections, one warm interface. Here's the lay of the land —
        flip to page 2 when you're ready to set it up.
      </p>

      <div style={{marginTop: 22}}>
        {[
          ['Setup & Dashboards', '#8AA3B0', [
            ['01','Instructions'],['02','Setup'],['03','Command Dashboard'],
            ['04','Bank Account'],['05','Cash-flow Calendar']
          ]],
          ['Bookkeeping', '#C4714A', [
            ['06','Bookkeeping Setup'],['07','Income Tracker'],['08','Expense Tracker'],
            ['09','Mileage Tracker'],['10','Quarterly Tax Estimator ★'],['11','Monthly / Annual P&L']
          ]],
          ['Orders & Sales', '#7A9E7E', [
            ['12','Order Setup'],['13','Order Overview'],['14','Sales Overview'],
            ['15','Recipe / BOM'],['16','Pricing Calculator'],['17','Customer Tracker'],['18','Order Tracker']
          ]],
          ['Inventory', '#D4A843', [
            ['19','Material Inventory'],['20','Product Inventory'],['21','Invoice Generator']
          ]],
          ['Craft Fairs ★', '#D4776A', [
            ['22','Event Setup'],['23','Event Tracker'],['24','Event Dashboard']
          ]],
          ['Tasks & Multi-Platform', '#B79D7A', [
            ['25','Task Setup'],['26','Task Tracker'],['27','Platform Comparison ★'],['28','Quick Entry (Mobile) ★']
          ]],
        ].map(([title, color, items]) => (
          <div key={title} style={{ marginBottom: 14 }}>
            <div style={{ display:'flex', alignItems:'center', gap: 10, marginBottom: 6 }}>
              <div style={{ width: 16, height: 16, borderRadius: 3, background: color }} />
              <div style={{ fontFamily:'Montserrat', fontWeight: 700, fontSize: 12, letterSpacing:'0.06em', color:'var(--charcoal)' }}>{title}</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 4, paddingLeft: 26 }}>
              {items.map(([n, label]) => (
                <div key={n} style={{ display:'flex', gap: 8, fontSize: 11.5, color: 'var(--charcoal)' }}>
                  <span style={{ fontFamily:'JetBrains Mono', color: 'var(--muted)', fontSize: 10.5 }}>{n}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 14, fontSize: 10.5, color: 'var(--muted)' }}>
        ★ New for v1.0 — addresses the most common gaps in competing templates.
      </div>
      <PrintFooter left="Business HQ Quick Start" right="01 / 04" />
    </div>
  );
}

function QuickStartP2() {
  return (
    <div className="page" data-screen-label="QuickStart p2">
      <div className="eyebrow">Quick start · page 2 of 4</div>
      <h1>Set up in 10 minutes.</h1>
      <div className="rule terra"></div>
      <p style={{maxWidth: 600}}>
        Skip the fiddly stuff. Do these six things and the rest of the sheet wakes up
        on its own.
      </p>

      <div style={{marginTop: 22, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        {[
          ['2 min', 'Setup tab', 'Business name, currency, fiscal year, platforms.', '02'],
          ['3 min', 'Order Setup', 'Paste your top 10–20 products, SKUs, prices, COGS.', '12'],
          ['2 min', 'Material Inventory', 'Add your raw materials + reorder points.', '19'],
          ['1 min', 'Command Dashboard', 'Set your 2026 profit goal. The thermometer wakes up.', '03'],
          ['1 min', 'Tax Estimator', 'Choose filing status + bracket. Q1–Q4 estimates appear.', '10'],
          ['1 min', 'Quick Entry', 'Bookmark on your phone home screen for on-the-go logging.', '28'],
        ].map(([min, tab, body, tabRef], i) => (
          <div key={i} style={{ background: '#fff', border: '1px solid var(--grid)', borderRadius: 4, padding: 14 }}>
            <div style={{ display:'flex', justifyContent: 'space-between', marginBottom: 6 }}>
              <span style={{
                background: 'var(--terracotta-wash)', color: 'var(--terracotta-2)', padding: '2px 8px',
                fontSize: 10, fontFamily: 'Montserrat', fontWeight: 700, letterSpacing: '0.1em', borderRadius: 2
              }}>{min}</span>
              <span style={{ fontFamily:'JetBrains Mono', fontSize: 10, color: 'var(--muted)' }}>Tab {tabRef}</span>
            </div>
            <div style={{ fontFamily:'Montserrat', fontWeight: 700, fontSize: 13, color:'var(--charcoal)' }}>{tab}</div>
            <p style={{margin: '4px 0 0', fontSize: 11.5, color: '#555' }}>{body}</p>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: 28 }}>Where things live</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginTop: 8 }}>
        <Where lbl="Sales going in" tabRef="07 + 28" />
        <Where lbl="Expenses going out" tabRef="08" />
        <Where lbl="Mileage" tabRef="09" />
        <Where lbl="What did I sell?" tabRef="13 + 14 + 18" />
        <Where lbl="What's running low?" tabRef="19" />
        <Where lbl="Pricing decisions" tabRef="16" />
        <Where lbl="Customer history" tabRef="17" />
        <Where lbl="Tax safety net" tabRef="10" />
        <Where lbl="Did this market pay off?" tabRef="23 + 24" />
      </div>

      <PrintFooter left="Business HQ Quick Start" right="02 / 04" />
    </div>
  );
}

function Where({ lbl, tabRef }) {
  return (
    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center',
      padding: '10px 12px', background: 'var(--cream-2)', borderRadius: 3, fontSize: 11.5 }}>
      <span style={{ color: 'var(--charcoal)' }}>{lbl}</span>
      <span style={{ fontFamily:'JetBrains Mono', fontSize: 10.5, color: 'var(--terracotta-2)', fontWeight: 700 }}>Tab {tabRef}</span>
    </div>
  );
}

function QuickStartP3() {
  return (
    <div className="page" data-screen-label="QuickStart p3">
      <div className="eyebrow">Quick start · page 3 of 4</div>
      <h1>Your first week.</h1>
      <div className="rule terra"></div>
      <p style={{maxWidth: 600}}>
        A weekly rhythm that takes ~15 minutes total — and gives you back the
        "I know my numbers" feeling you've been chasing.
      </p>

      <div style={{ marginTop: 22 }}>
        {[
          ['MON','3 min','Log weekend orders + receipts','Open <b>Tab 7</b> and <b>Tab 8</b>. Use the Quick Entry tab on your phone if it\'s faster.'],
          ['WED','2 min','Restock check','Skim <b>Tab 19 Material Inventory</b>. Red rows = reorder before the weekend.'],
          ['FRI','5 min','Money in / money out','Compare <b>Tab 4 Bank Account</b> to your bank statement. Reconcile any mismatches.'],
          ['SUN','5 min','Weekly check-in','Print the <b>Weekly Check-in</b> worksheet (the one-pager that came with this template).'],
        ].map(([day, time, title, body], i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '64px 1fr auto', gap: 14, padding: '14px 0',
            borderBottom: '1px solid var(--grid)', alignItems: 'center'
          }}>
            <div style={{
              fontFamily: 'Montserrat', fontWeight: 700, fontSize: 12, letterSpacing: '0.1em',
              color: '#fff', background: 'var(--terracotta)', padding: '8px 0', textAlign: 'center', borderRadius: 3
            }}>{day}</div>
            <div>
              <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 13, color: 'var(--charcoal)' }}>{title}</div>
              <div style={{ fontSize: 11.5, color: '#444', marginTop: 2 }}
                dangerouslySetInnerHTML={{__html: body}}></div>
            </div>
            <div style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: 'var(--muted)' }}>{time}</div>
          </div>
        ))}
      </div>

      <h2 style={{marginTop: 28}}>End-of-month, 20 minutes</h2>
      <div style={{ marginTop: 8, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
        <Where lbl="Review P&L" tabRef="11" />
        <Where lbl="Confirm tax set-aside" tabRef="10" />
        <Where lbl="Recap events" tabRef="24" />
      </div>

      <div style={{ marginTop: 24, padding: '14px 16px', background: 'var(--sage-wash)',
        border: '1px solid #C7DCC9', borderRadius: 4 }}>
        <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 11.5, color: 'var(--sage-2)',
          letterSpacing: '0.06em', marginBottom: 4 }}>🌿 Pro tip from Maya</div>
        <div style={{ fontSize: 12, color: '#3b3b3b', lineHeight: 1.55 }}>
          Do Friday reconciliation <i>before</i> you ship the weekend orders. Future-you,
          packing wholesale at midnight on Sunday, will be very grateful.
        </div>
      </div>

      <PrintFooter left="Business HQ Quick Start" right="03 / 04" />
    </div>
  );
}

function QuickStartP4() {
  const faqs = [
    ['Will this work on Excel for Mac?','Most tabs will. Charts and dropdown validation may render differently. For full functionality we recommend the Google Sheets version on Mac.'],
    ['Can I add my own products / categories?','Yes. Tab 12 (Order Setup) is the source of truth — add or rename items there and everything downstream updates.'],
    ['What if my fiscal year doesn\'t start in January?','Set your fiscal start month on Tab 2 (Setup). All YTD calculations honor it.'],
    ['I have a sales tax problem — does this file it?','No. We track tax collected (Tab 7) and self-employment tax estimate (Tab 10), but you\'ll still file via your state portal or accountant.'],
    ['Does this handle multiple currencies?','You pick one base currency on Tab 2 (USD/CAD/GBP/EUR/AUD). Multi-currency conversion isn\'t built in.'],
    ['Where do I get help?','Email hello@business-hq.co — replies usually within one business day. Video walkthrough: youtube.com/@businesshq.'],
  ];
  return (
    <div className="page" data-screen-label="QuickStart p4">
      <div className="eyebrow">Quick start · page 4 of 4</div>
      <h1>FAQ.</h1>
      <div className="rule terra"></div>

      <div style={{ marginTop: 22 }}>
        {faqs.map(([q,a]) => (
          <div className="qbox" key={q}>
            <div className="q">{q}</div>
            <div className="a">{a}</div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: 18, padding: '16px 18px', background: 'var(--charcoal)', color: '#fff',
        borderRadius: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center'
      }}>
        <div>
          <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 10.5,
            letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.7 }}>Still stuck?</div>
          <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 16, marginTop: 4 }}>
            hello@business-hq.co · 24-hour reply
          </div>
        </div>
        <div style={{
          padding: '10px 16px', background: 'var(--terracotta)', borderRadius: 3,
          fontFamily: 'Montserrat', fontWeight: 700, fontSize: 11, letterSpacing: '0.08em'
        }}>WATCH WALKTHROUGH ↗</div>
      </div>

      <PrintFooter left="Business HQ Quick Start" right="04 / 04" />
    </div>
  );
}

// ===== Weekly Check-in Printable =====
function WeeklyCheckin() {
  return (
    <div className="page" data-screen-label="Weekly Check-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <div className="eyebrow">Weekly business check-in · printable companion</div>
          <h1 style={{ fontSize: 42, marginTop: 4 }}>How was the week?</h1>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 10,
            letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--muted)' }}>Week of</div>
          <div style={{ borderBottom: '2px solid var(--charcoal)', width: 180, height: 28 }}></div>
        </div>
      </div>
      <div className="rule terra" style={{margin: '18px 0 22px'}}></div>

      {/* Top row: 3 number boxes */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
        {[
          ['Total sales this week','$'],
          ['Top-selling product',''],
          ['# of orders shipped','']
        ].map(([lbl, prefix]) => (
          <div key={lbl} style={{
            border: '1.5px solid var(--charcoal)', borderRadius: 4, padding: '14px 16px',
            background: '#fff', minHeight: 96
          }}>
            <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 10,
              letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 4 }}>{lbl}</div>
            <div style={{ fontFamily: 'Montserrat', fontWeight: 300, fontStyle: 'italic',
              fontSize: 38, color: 'var(--terracotta)' }}>{prefix}</div>
          </div>
        ))}
      </div>

      {/* Yes/No row */}
      <div style={{ marginTop: 18, padding: '14px 16px', background: '#fff',
        border: '1.5px solid var(--charcoal)', borderRadius: 4 }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 13, color: 'var(--charcoal)' }}>
            Did I log every expense this week?
          </div>
          <div style={{ display: 'flex', gap: 16, fontSize: 13 }}>
            <div style={{ display:'flex', alignItems:'center', gap: 6 }}>
              <div style={{ width: 18, height: 18, border: '1.5px solid var(--charcoal)', borderRadius: 3 }}></div>
              <span>Yes</span>
            </div>
            <div style={{ display:'flex', alignItems:'center', gap: 6 }}>
              <div style={{ width: 18, height: 18, border: '1.5px solid var(--charcoal)', borderRadius: 3 }}></div>
              <span>Mostly</span>
            </div>
            <div style={{ display:'flex', alignItems:'center', gap: 6 }}>
              <div style={{ width: 18, height: 18, border: '1.5px solid var(--charcoal)', borderRadius: 3 }}></div>
              <span>Not yet — set aside 15 min</span>
            </div>
          </div>
        </div>
      </div>

      {/* Two-column big section */}
      <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div style={{
          border: '1.5px solid var(--charcoal)', borderRadius: 4, padding: '14px 16px',
          background: '#fff', minHeight: 200
        }}>
          <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 11,
            letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--charcoal)', marginBottom: 6 }}>
            ⚠ Inventory restocks needed
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 12 }}>
            {[0,1,2,3,4].map(i => (
              <div key={i} style={{ display:'grid', gridTemplateColumns: '18px 1fr', gap: 10, alignItems: 'center' }}>
                <div style={{ width: 16, height: 16, border: '1.5px solid var(--charcoal)', borderRadius: 3 }}></div>
                <div style={{ borderBottom: '1px solid var(--grid-2)', height: 18 }}></div>
              </div>
            ))}
          </div>
        </div>
        <div style={{
          border: '1.5px solid var(--charcoal)', borderRadius: 4, padding: '14px 16px',
          background: '#fff', minHeight: 200
        }}>
          <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 11,
            letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--charcoal)', marginBottom: 6 }}>
            🎯 Three goals for next week
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 12 }}>
            {[1,2,3].map(i => (
              <div key={i} style={{ display:'grid', gridTemplateColumns: '24px 1fr', gap: 10, alignItems: 'center' }}>
                <div style={{
                  fontFamily:'Montserrat', fontWeight: 700, color:'var(--terracotta)', fontSize: 14
                }}>0{i}</div>
                <div style={{ borderBottom: '1px solid var(--grid-2)', height: 22 }}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mood + wins */}
      <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 16 }}>
        <div style={{ border:'1.5px solid var(--charcoal)', borderRadius: 4, padding: '14px 16px', background:'#fff', minHeight: 130 }}>
          <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 11,
            letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--charcoal)', marginBottom: 8 }}>
            ✨ One small win to celebrate
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap: 14, marginTop: 6 }}>
            <div style={{ borderBottom: '1px solid var(--grid-2)', height: 18 }}></div>
            <div style={{ borderBottom: '1px solid var(--grid-2)', height: 18 }}></div>
            <div style={{ borderBottom: '1px solid var(--grid-2)', height: 18 }}></div>
          </div>
        </div>
        <div style={{ border:'1.5px solid var(--charcoal)', borderRadius: 4, padding: '14px 16px', background:'#fff' }}>
          <div style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 11,
            letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--charcoal)', marginBottom: 10 }}>
            How did I feel this week?
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 6 }}>
            {['😞','😐','🙂','😊','🤩'].map((e,i) => (
              <div key={i} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap: 4 }}>
                <div style={{
                  width: 28, height: 28, border: '1.5px solid var(--charcoal)', borderRadius: '50%'
                }}></div>
                <div style={{ fontSize: 18 }}>{e}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <PrintFooter left="Business HQ · Print Companion" right="Print weekly · keep next to laptop" />
    </div>
  );
}

Object.assign(window, {
  SpreadsheetFrame, CoverGoogleSheetsLink,
  QuickStartP1, QuickStartP2, QuickStartP3, QuickStartP4,
  WeeklyCheckin
});
