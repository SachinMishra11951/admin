
// ══════════════════════════════════
//   DATA
// ══════════════════════════════════
const complaints = [
    { id: 'CMP-001', date: 'Jun 15, 11:23 PM', type: 'Complaint', resource: 'Book Classroom', location: 'Classroom', priority: 'High', status: 'Open' },
    { id: 'CMP-002', date: 'Jun 15, 11:44 PM', type: 'Complaint', resource: 'Book Lab', location: 'Dark Lab', priority: 'Medium', status: 'Assigned' },
    { id: 'CMP-003', date: 'Jun 15, 12:06 PM', type: 'Complaint', resource: 'Equipment', location: 'Classroom', priority: 'Low', status: 'Assigned' },
    { id: 'CMP-004', date: 'Jun 15, 16:33 PM', type: 'Complaint', resource: 'Projector & Projector', location: 'Projector', priority: 'High', status: 'Escalated' },
    { id: 'CMP-005', date: 'Jun 15, 10:43 PM', type: 'Complaint', resource: 'Glamm Resources', location: 'Resources', priority: 'Medium', status: 'Assigned' },
    { id: 'CMP-006', date: 'Jun 15, 11:26 PM', type: 'Complaint', resource: '3D Printer', location: 'Catplate', priority: 'Low', status: 'Closed' },
    { id: 'CMP-007', date: 'Jun 15, 11:43 PM', type: 'Complaint', resource: 'Projectums', location: 'Clastream', priority: 'High', status: 'Escalated' },
    { id: 'CMP-008', date: 'Jun 14, 09:15 AM', type: 'Complaint', resource: 'Computer Lab', location: 'Block A', priority: 'Medium', status: 'Resolved' },
    { id: 'CMP-009', date: 'Jun 14, 02:30 PM', type: 'Complaint', resource: 'Wi-Fi Router', location: 'Library', priority: 'High', status: 'Open' },
    { id: 'CMP-010', date: 'Jun 13, 11:00 AM', type: 'Complaint', resource: 'AC Unit', location: 'Lab 2', priority: 'Low', status: 'Resolved' },
];

const bookingRequests = [
    { id: 'BKG-001', student: 'Rahul Sharma', resource: 'Computer Lab 1', date: 'Jun 27, 2026', slot: '10:00–12:00', purpose: 'Project Work', status: 'Pending' },
    { id: 'BKG-002', student: 'Priya Patel', resource: 'Classroom B', date: 'Jun 26, 2026', slot: '14:00–16:00', purpose: 'Study Group', status: 'Approved' },
    { id: 'BKG-003', student: 'Amit Kumar', resource: '3D Printer', date: 'Jun 28, 2026', slot: '08:00–10:00', purpose: 'Prototype', status: 'Pending' },
    { id: 'BKG-004', student: 'Neha Singh', resource: 'Projector Setup', date: 'Jun 25, 2026', slot: '13:00–15:00', purpose: 'Presentation', status: 'Rejected' },
    { id: 'BKG-005', student: 'Raj Verma', resource: 'Book Lab', date: 'Jun 29, 2026', slot: '15:00–17:00', purpose: 'Research', status: 'Pending' },
];

const usersData = [
    { id: 'USR-001', name: 'Rahul Sharma', email: 'rahul@campus.edu', role: 'Student', joined: 'Jan 10, 2025', status: 'Active' },
    { id: 'USR-002', name: 'Priya Patel', email: 'priya@campus.edu', role: 'Student', joined: 'Jan 12, 2025', status: 'Active' },
    { id: 'USR-003', name: 'Dr. Amit Kumar', email: 'amit@campus.edu', role: 'Staff', joined: 'Aug 01, 2024', status: 'Active' },
    { id: 'USR-004', name: 'Neha Singh', email: 'neha@campus.edu', role: 'Admin', joined: 'Jul 15, 2024', status: 'Active' },
    { id: 'USR-005', name: 'Raj Verma', email: 'raj@campus.edu', role: 'Student', joined: 'Feb 20, 2025', status: 'Inactive' },
];

const activities = [
    { type: 'complaint', dot: 'red', text: '<strong>New Complaint:</strong> Projector malfunction in Room 201.', time: '2 mins ago' },
    { type: 'booking', dot: 'green', text: '<strong>Booking Approved:</strong> Lab 3 booked by Rahul Sharma.', time: '8 mins ago' },
    { type: 'resolve', dot: 'green', text: '<strong>Resolved:</strong> CMP-008 — Computer Lab AC issue fixed.', time: '22 mins ago' },
    { type: 'escalate', dot: 'red', text: '<strong>Escalated:</strong> CMP-007 — Projector unresolved for 48h.', time: '1 hr ago' },
    { type: 'user', dot: '', text: '<strong>New Registration:</strong> Raj Verma joined as Student.', time: '3 hrs ago' },
    { type: 'complaint', dot: 'yellow', text: '<strong>New Complaint:</strong> Wi-Fi down in Library Block C.', time: '5 hrs ago' },
    { type: 'booking', dot: '', text: '<strong>Booking Rejected:</strong> Projector setup conflict on Jun 25.', time: '6 hrs ago' },
];

const notificationsData = [
    { icon: '📋', color: 'rgba(248,113,113,0.15)', title: 'New High-Priority Complaint', msg: 'CMP-009: Wi-Fi Router issue in Library reported. Immediate action required.', time: '2 mins ago', unread: true },
    { icon: '✅', color: 'rgba(74,222,128,0.15)', title: 'Complaint Resolved', msg: 'CMP-008: Computer Lab AC issue successfully resolved by maintenance team.', time: '22 mins ago', unread: true },
    { icon: '📅', color: 'rgba(99,102,241,0.15)', title: 'New Booking Request', msg: 'Rahul Sharma requested Computer Lab 1 for Jun 27, 10:00–12:00.', time: '1 hr ago', unread: true },
    { icon: '⚠️', color: 'rgba(251,191,36,0.15)', title: 'Complaint Escalated', msg: 'CMP-007 has been escalated — unresolved for over 48 hours.', time: '2 hrs ago', unread: false },
    { icon: '👤', color: 'rgba(34,211,238,0.15)', title: 'New Student Registration', msg: 'Raj Verma (USR-005) has completed registration and is awaiting activation.', time: '3 hrs ago', unread: false },
    { icon: '📊', color: 'rgba(244,114,182,0.15)', title: 'Monthly Report Ready', msg: 'June 2026 Campus Analytics report is ready for review and download.', time: 'Yesterday', unread: false },
];

const resources = [
    { name: 'Computer Lab 1', type: 'Lab', capacity: '30 seats', status: 'available', icon: '💻' },
    { name: 'Computer Lab 2', type: 'Lab', capacity: '25 seats', status: 'busy', icon: '💻' },
    { name: 'Classroom A', type: 'Classroom', capacity: '60 seats', status: 'available', icon: '🏫' },
    { name: 'Classroom B', type: 'Classroom', capacity: '45 seats', status: 'partial', icon: '🏫' },
    { name: '3D Printer', type: 'Equipment', capacity: '1 unit', status: 'available', icon: '🖨️' },
    { name: 'Book Lab', type: 'Library', capacity: '80 seats', status: 'partial', icon: '📚' },
    { name: 'Projector Setup', type: 'Equipment', capacity: '3 units', status: 'busy', icon: '📽️' },
    { name: 'Innovation Lab', type: 'Lab', capacity: '20 seats', status: 'available', icon: '🔬' },
    { name: 'Seminar Hall', type: 'Hall', capacity: '200 seats', status: 'available', icon: '🏛️' },
];

// ══════════════════════════════════
//   STARS
// ══════════════════════════════════
(function createStars() {
    const c = document.getElementById('stars');
    for (let i = 0; i < 120; i++) {
        const s = document.createElement('div');
        s.className = 'star';
        s.style.cssText = `width:${Math.random() * 2.5 + 0.5}px;height:${Math.random() * 2.5 + 0.5}px;left:${Math.random() * 100}%;top:${Math.random() * 100}%;--d:${Math.random() * 3 + 2}s;--del:${Math.random() * 4}s;--op:${Math.random() * 0.7 + 0.2}`;
        c.appendChild(s);
    }
})();

// ══════════════════════════════════
//   LOGIN
// ══════════════════════════════════
function doLogin() {
    const btn = document.getElementById('login-btn');
    btn.textContent = 'Signing in...';
    btn.style.opacity = '0.7';
    setTimeout(() => {
        document.getElementById('login-screen').style.transition = 'opacity 0.6s';
        document.getElementById('login-screen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('login-screen').style.display = 'none';
            document.getElementById('app').style.display = 'block';
            initApp();
        }, 600);
    }, 1200);
}
function doLogout() {
    if (!confirm('Log out of Admin Portal?')) return;
    document.getElementById('app').style.display = 'none';
    document.getElementById('login-screen').style.display = 'flex';
    document.getElementById('login-screen').style.opacity = '1';
    document.getElementById('login-btn').textContent = 'Login';
    document.getElementById('login-btn').style.opacity = '1';
}

// ══════════════════════════════════
//   THEME
// ══════════════════════════════════
let isDark = true;
function toggleTheme() {
    isDark = !isDark;
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    document.getElementById('theme-icon').textContent = isDark ? '🌙' : '☀️';
    document.getElementById('theme-label').textContent = isDark ? 'Dark' : 'Light';
    const track = document.getElementById('toggle-track');
    isDark ? track.classList.remove('on') : track.classList.add('on');
}

// ══════════════════════════════════
//   NAVIGATION
// ══════════════════════════════════
const pageTitles = {
    dashboard: 'DASHBOARD', complaints: 'COMPLAINT MANAGEMENT',
    resources: 'RESOURCE MANAGEMENT', bookings: 'LAB BOOKING',
    approvals: 'BOOKING APPROVAL', statistics: 'STATISTICS & ANALYTICS',
    notifications: 'NOTIFICATIONS', users: 'USER MANAGEMENT', settings: 'SETTINGS'
};
function showPage(page, el) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.getElementById('page-' + page).classList.add('active');
    if (el) el.classList.add('active');
    document.getElementById('header-title').textContent = pageTitles[page] || page.toUpperCase();
}

// ══════════════════════════════════
//   MODALS
// ══════════════════════════════════
function openModal(id) { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }
document.querySelectorAll('.modal-overlay').forEach(m => {
    m.addEventListener('click', e => { if (e.target === m) m.classList.remove('open'); });
});

// ══════════════════════════════════
//   INIT APP
// ══════════════════════════════════
let chartsInit = false;
function initApp() {
    renderActivity();
    renderProgressBars();
    startLiveFeed();
    renderComplaintsTable(complaints);
    renderBookings();
    renderApprovals();
    renderNotifications();
    renderUsers();
    buildCalendar();
    animateCounters();
    if (!chartsInit) { chartsInit = true; setTimeout(initCharts, 100); }
}

// ══════════════════════════════════
//   COUNTER ANIMATION
// ══════════════════════════════════
function animateCounters() {
    document.querySelectorAll('[data-count]').forEach(el => {
        const target = parseInt(el.getAttribute('data-count'));
        let cur = 0;
        const step = Math.ceil(target / 30);
        const t = setInterval(() => {
            cur = Math.min(cur + step, target);
            el.textContent = cur;
            if (cur >= target) clearInterval(t);
        }, 40);
    });
}

// ══════════════════════════════════
//   ACTIVITY FEED
// ══════════════════════════════════
function renderActivity() {
    const list = document.getElementById('activity-list');
    list.innerHTML = activities.map(a => `
    <div class="activity-item">
      <div class="activity-dot ${a.dot}"></div>
      <div>
        <div class="activity-text">${a.text}</div>
        <div class="activity-time">${a.time}</div>
      </div>
    </div>`).join('');
}

// ══════════════════════════════════
//   PROGRESS BARS
// ══════════════════════════════════
const progressData = [
    { label: 'System Animation', pct: 40, color: 'linear-gradient(90deg,var(--accent),var(--cyan))' },
    { label: 'Step 1 — Database Sync', pct: 65, color: 'linear-gradient(90deg,var(--cyan),var(--green))' },
    { label: 'Step Animation', pct: 55, color: 'linear-gradient(90deg,var(--yellow),var(--pink))' },
    { label: 'Step 2 — Module Update', pct: 80, color: 'linear-gradient(90deg,var(--pink),var(--accent))' },
];
function renderProgressBars() {
    const c = document.getElementById('progress-bars');
    c.innerHTML = progressData.map(p => `
    <div class="progress-container">
      <div class="progress-label"><span>${p.label}</span><span style="color:var(--accent2)">${p.pct}%</span></div>
      <div class="progress-bar"><div class="progress-fill" style="width:0%;background:${p.color}" data-w="${p.pct}"></div></div>
    </div>`).join('');
    setTimeout(() => {
        document.querySelectorAll('.progress-fill[data-w]').forEach(el => {
            el.style.width = el.getAttribute('data-w') + '%';
        });
    }, 300);
}

// ══════════════════════════════════
//   LIVE FEED TYPE ANIMATION
// ══════════════════════════════════
const liveMessages = [
    'CMP-009 assigned to maintenance team → Status: Assigned',
    'New booking request: Computer Lab 1 — Rahul Sharma',
    'CMP-007 escalated — 48h resolution breach',
    'Resource sync complete — 12 assets updated',
    'User USR-005 registration verified',
    'Monthly report generated — June 2026',
    'Lab 3 availability refreshed — 3 slots open',
];
let liveIdx = 0, charIdx = 0;
function startLiveFeed() {
    const el = document.getElementById('live-text');
    if (!el) return;
    function type() {
        const msg = liveMessages[liveIdx % liveMessages.length];
        if (charIdx <= msg.length) {
            el.innerHTML = msg.slice(0, charIdx) + '<span class="type-cursor"></span>';
            charIdx++;
            setTimeout(type, 45);
        } else {
            setTimeout(() => {
                charIdx = 0; liveIdx++;
                type();
            }, 2800);
        }
    }
    type();
}

// ══════════════════════════════════
//   COMPLAINTS TABLE
// ══════════════════════════════════
function statusPill(s) {
    const map = { Open: 'status-open', Assigned: 'status-assigned', Resolved: 'status-resolved', Escalated: 'status-escalated', Closed: 'status-closed' };
    return `<span class="status-pill ${map[s] || ''}">${s}</span>`;
}
function priorityBadge(p) {
    return `<span class="priority-${p.toLowerCase()}">${p === 'High' ? '▲' : p === 'Medium' ? '● ' : '▼'} ${p}</span>`;
}
function renderComplaintsTable(data) {
    const tbody = document.getElementById('complaints-tbody');
    const cc = document.getElementById('complaint-count');
    if (cc) cc.textContent = `Showing 1–${Math.min(data.length, 10)} of ${data.length} complaints`;
    tbody.innerHTML = data.slice(0, 10).map(c => `
    <tr>
      <td><span style="font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--cyan)">${c.id}</span></td>
      <td style="font-size:11px">${c.date}</td>
      <td>${c.type}</td>
      <td>${c.resource}</td>
      <td>${c.location}</td>
      <td>${priorityBadge(c.priority)}</td>
      <td>${statusPill(c.status)}</td>
      <td>
        <div style="display:flex;gap:5px">
          <button class="btn btn-secondary btn-sm" onclick="alert('Assign: ${c.id}')">Assign</button>
          <button class="btn btn-secondary btn-sm" onclick="escalateComplaint('${c.id}')">↑</button>
          <button class="btn btn-danger btn-sm" onclick="closeComplaint('${c.id}')">✕</button>
        </div>
      </td>
    </tr>`).join('');
}
function filterComplaints() {
    const search = document.getElementById('complaint-search').value.toLowerCase();
    const cat = document.getElementById('filter-category').value;
    const status = document.getElementById('filter-status').value;
    const priority = document.getElementById('filter-priority').value;
    const filtered = complaints.filter(c => {
        return (!search || c.id.toLowerCase().includes(search) || c.resource.toLowerCase().includes(search))
            && (!cat || c.type.includes(cat) || c.resource.includes(cat))
            && (!status || c.status === status)
            && (!priority || c.priority === priority);
    });
    renderComplaintsTable(filtered);
    document.getElementById('complaint-type-text').textContent = `Showing ${filtered.length} result(s)`;
}
function resetFilters() {
    document.getElementById('complaint-search').value = '';
    document.getElementById('filter-category').value = '';
    document.getElementById('filter-status').value = '';
    document.getElementById('filter-priority').value = '';
    filterComplaints();
}
function escalateComplaint(id) {
    const c = complaints.find(x => x.id === id);
    if (c) { c.status = 'Escalated'; renderComplaintsTable(complaints); renderActivity(); }
}
function closeComplaint(id) {
    const c = complaints.find(x => x.id === id);
    if (c && confirm(`Close complaint ${id}?`)) { c.status = 'Closed'; renderComplaintsTable(complaints); }
}
function addComplaint() {
    closeModal('add-complaint-modal');
    const newId = 'CMP-0' + (complaints.length + 1);
    complaints.unshift({ id: newId, date: 'Jun 25, 2026', type: 'Complaint', resource: 'New Resource', location: 'Campus', priority: 'Medium', status: 'Open' });
    renderComplaintsTable(complaints);
    alert('Complaint submitted: ' + newId);
}
function changePage(dir) {
    alert(dir > 0 ? 'Next page' : 'Previous page');
}

// ══════════════════════════════════
//   BOOKINGS
// ══════════════════════════════════
function renderBookings() {
    const grid = document.getElementById('booking-grid');
    grid.innerHTML = resources.map(r => `
    <div class="booking-card">
      <div class="booking-card-type">${r.type}</div>
      <div style="font-size:24px;margin-bottom:6px">${r.icon}</div>
      <div class="booking-card-name">${r.name}</div>
      <div class="booking-card-details">${r.capacity}</div>
      <div class="booking-available">
        <div class="avail-dot ${r.status}"></div>
        <span style="color:var(--text2);font-size:11px">${r.status.charAt(0).toUpperCase() + r.status.slice(1)}</span>
        <button class="btn btn-primary btn-sm" style="margin-left:auto;padding:4px 10px" onclick="openModal('book-modal')">Book</button>
      </div>
    </div>`).join('');
}

// ══════════════════════════════════
//   APPROVALS
// ══════════════════════════════════
function renderApprovals() {
    const tbody = document.getElementById('approvals-tbody');
    tbody.innerHTML = bookingRequests.map(b => `
    <tr>
      <td><span style="font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--cyan)">${b.id}</span></td>
      <td>${b.student}</td>
      <td>${b.resource}</td>
      <td style="font-size:12px">${b.date}</td>
      <td style="font-size:12px">${b.slot}</td>
      <td style="font-size:12px">${b.purpose}</td>
      <td>${statusPill(b.status)}</td>
      <td>
        <div style="display:flex;gap:5px">
          ${b.status === 'Pending' ? `<button class="btn btn-primary btn-sm" onclick="approveBooking('${b.id}')">✓ Approve</button><button class="btn btn-danger btn-sm" onclick="rejectBooking('${b.id}')">✕ Reject</button>` : `<button class="btn btn-secondary btn-sm">View</button>`}
        </div>
      </td>
    </tr>`).join('');
}
function approveBooking(id) {
    const b = bookingRequests.find(x => x.id === id);
    if (b) { b.status = 'Approved'; renderApprovals(); }
}
function rejectBooking(id) {
    const b = bookingRequests.find(x => x.id === id);
    if (b) { b.status = 'Rejected'; renderApprovals(); }
}

// ══════════════════════════════════
//   NOTIFICATIONS
// ══════════════════════════════════
function renderNotifications() {
    const list = document.getElementById('notif-list');
    list.innerHTML = notificationsData.map((n, i) => `
    <div class="notif-item ${n.unread ? 'unread' : ''}" id="notif-${i}">
      <div class="notif-icon" style="background:${n.color}">${n.icon}</div>
      <div class="notif-content">
        <div class="notif-title">${n.title}</div>
        <div class="notif-msg">${n.msg}</div>
        <div class="notif-time">${n.time}</div>
      </div>
      ${n.unread ? '<div class="notif-unread-badge"></div>' : ''}
    </div>`).join('');
}
function markAllRead() {
    notificationsData.forEach(n => n.unread = false);
    renderNotifications();
    document.querySelector('.header-btn .badge').textContent = '0';
}

// ══════════════════════════════════
//   USERS
// ══════════════════════════════════
function renderUsers() {
    const tbody = document.getElementById('users-tbody');
    tbody.innerHTML = usersData.map(u => `
    <tr>
      <td><span style="font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--cyan)">${u.id}</span></td>
      <td><strong style="color:var(--text)">${u.name}</strong></td>
      <td style="font-size:12px;color:var(--text3)">${u.email}</td>
      <td><span class="status-pill ${u.role === 'Admin' ? 'status-resolved' : u.role === 'Staff' ? 'status-assigned' : 'status-open'}">${u.role}</span></td>
      <td style="font-size:12px">${u.joined}</td>
      <td>${statusPill(u.status)}</td>
      <td><button class="btn btn-secondary btn-sm">Edit</button></td>
    </tr>`).join('');
}

// ══════════════════════════════════
//   CALENDAR
// ══════════════════════════════════
let calDate = new Date(2026, 5, 1);
const bookingDays = new Set([3, 7, 12, 15, 18, 22, 27]);
const fullyBooked = new Set([8, 19, 25]);
function buildCalendar() {
    const grid = document.getElementById('cal-grid');
    const ym = document.getElementById('cal-month-year');
    if (!grid) return;
    ym.textContent = calDate.toLocaleString('default', { month: 'long', year: 'numeric' });
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let html = days.map(d => `<div class="cal-day-label">${d}</div>`).join('');
    const first = new Date(calDate.getFullYear(), calDate.getMonth(), 1).getDay();
    const total = new Date(calDate.getFullYear(), calDate.getMonth() + 1, 0).getDate();
    const today = new Date(); const isThisMonth = today.getMonth() === calDate.getMonth() && today.getFullYear() === calDate.getFullYear();
    for (let i = 0; i < first; i++) html += `<div class="cal-day empty"></div>`;
    for (let d = 1; d <= total; d++) {
        const isToday = isThisMonth && d === today.getDate();
        const hasBook = bookingDays.has(d);
        const isBusy = fullyBooked.has(d);
        html += `<div class="cal-day ${isToday ? 'today' : ''} ${hasBook ? 'has-booking' : ''} ${isBusy ? 'booked' : ''}">${d}</div>`;
    }
    grid.innerHTML = html;
}
function calNav(dir) { calDate.setMonth(calDate.getMonth() + dir); buildCalendar(); }

// ══════════════════════════════════
//   CHARTS (no external lib)
// ══════════════════════════════════
function initCharts() {
    drawTrendChart();
    drawTransmissionChart();
    drawPdfPreview();
    drawStatsBar();
    drawStatsPie();
}

function getColors() {
    const isDarkMode = document.documentElement.getAttribute('data-theme') !== 'light';
    return {
        grid: isDarkMode ? 'rgba(99,102,241,0.1)' : 'rgba(99,102,241,0.15)',
        text: isDarkMode ? '#64748b' : '#6366f1',
        bg: isDarkMode ? '#131630' : '#ffffff',
    };
}

function drawTrendChart() {
    const canvas = document.getElementById('trendChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.offsetWidth || 400; const H = 130;
    canvas.width = W; canvas.height = H;
    const data = [20, 35, 28, 45, 38, 52, 40, 48, 35, 60, 55, 48];
    const data2 = [10, 18, 15, 28, 20, 35, 25, 30, 18, 40, 38, 30];
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const C = getColors();
    ctx.clearRect(0, 0, W, H);
    const pad = { t: 10, r: 10, b: 24, l: 30 };
    const cw = W - pad.l - pad.r, ch = H - pad.t - pad.b;
    const max = Math.max(...data, 60);
    // Grid
    for (let i = 0; i <= 4; i++) {
        const y = pad.t + ch - (ch * i / 4);
        ctx.strokeStyle = C.grid; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(pad.l, y); ctx.lineTo(pad.l + cw, y); ctx.stroke();
        ctx.fillStyle = C.text; ctx.font = '10px Inter'; ctx.textAlign = 'right';
        ctx.fillText(Math.round(max * i / 4), pad.l - 4, y + 3);
    }
    // Lines
    function drawLine(d, color, gStart, gEnd) {
        const pts = d.map((v, i) => ({ x: pad.l + i * (cw / (d.length - 1)), y: pad.t + ch - (v / max * ch) }));
        // Fill
        const grad = ctx.createLinearGradient(0, pad.t, 0, pad.t + ch);
        grad.addColorStop(0, gStart); grad.addColorStop(1, gEnd);
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pad.t + ch);
        pts.forEach(p => ctx.lineTo(p.x, p.y));
        ctx.lineTo(pts[pts.length - 1].x, pad.t + ch);
        ctx.closePath(); ctx.fillStyle = grad; ctx.fill();
        // Line
        ctx.beginPath(); ctx.strokeStyle = color; ctx.lineWidth = 2;
        ctx.lineJoin = 'round'; ctx.lineCap = 'round';
        pts.forEach((p, i) => i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y));
        ctx.stroke();
        // Dots
        pts.forEach(p => {
            ctx.beginPath(); ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
            ctx.fillStyle = color; ctx.fill();
        });
    }
    drawLine(data, '#6366f1', 'rgba(99,102,241,0.3)', 'rgba(99,102,241,0)');
    drawLine(data2, '#22d3ee', 'rgba(34,211,238,0.2)', 'rgba(34,211,238,0)');
    // Labels
    ctx.fillStyle = C.text; ctx.font = '9px Inter'; ctx.textAlign = 'center';
    labels.forEach((l, i) => ctx.fillText(l, pad.l + i * (cw / (labels.length - 1)), H - 4));
}

function drawTransmissionChart() {
    const canvas = document.getElementById('transmissionChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.offsetWidth || 300, H = 180;
    canvas.width = W; canvas.height = H;
    const C = getColors();
    // Draw nodes
    const nodes = [
        { x: 0.15, y: 0.2, label: 'Node A' }, { x: 0.5, y: 0.1, label: 'Node B' },
        { x: 0.85, y: 0.2, label: 'Node C' }, { x: 0.1, y: 0.6, label: 'Node D' },
        { x: 0.5, y: 0.5, label: 'Hub' }, { x: 0.9, y: 0.6, label: 'Node E' },
        { x: 0.3, y: 0.85, label: 'Node F' }, { x: 0.7, y: 0.85, label: 'Node G' },
    ];
    const edges = [[0, 4], [1, 4], [2, 4], [3, 4], [5, 4], [6, 4], [7, 4], [0, 1], [1, 2], [3, 6], [5, 7]];
    const pad = 16;
    const nx = n => pad + n.x * (W - pad * 2), ny = n => pad + n.y * (H - pad * 2);
    edges.forEach(([a, b]) => {
        ctx.beginPath();
        const grad = ctx.createLinearGradient(nx(nodes[a]), ny(nodes[a]), nx(nodes[b]), ny(nodes[b]));
        grad.addColorStop(0, 'rgba(99,102,241,0.5)'); grad.addColorStop(1, 'rgba(34,211,238,0.5)');
        ctx.strokeStyle = grad; ctx.lineWidth = 1.5;
        ctx.moveTo(nx(nodes[a]), ny(nodes[a])); ctx.lineTo(nx(nodes[b]), ny(nodes[b])); ctx.stroke();
    });
    nodes.forEach((n, i) => {
        const x = nx(n), y = ny(n);
        ctx.beginPath();
        ctx.arc(x, y, i === 4 ? 10 : 6, 0, Math.PI * 2);
        ctx.fillStyle = i === 4 ? '#6366f1' : 'rgba(34,211,238,0.8)';
        ctx.shadowBlur = i === 4 ? 15 : 8; ctx.shadowColor = i === 4 ? '#6366f1' : '#22d3ee';
        ctx.fill(); ctx.shadowBlur = 0;
        ctx.fillStyle = C.text; ctx.font = '8px Inter'; ctx.textAlign = 'center';
        ctx.fillText(n.label, x, y + (i === 4 ? 20 : 16));
    });
}

function drawPdfPreview() {
    const canvas = document.getElementById('pdfPreviewChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.offsetWidth || 300, H = 100;
    canvas.width = W; canvas.height = H;
    const bars = [{ v: 60, c: '#6366f1' }, { v: 80, c: '#22d3ee' }, { v: 70, c: '#4ade80' }, { v: 90, c: '#fbbf24' }, { v: 55, c: '#f472b6' }];
    const bw = 20, gap = 12, total = bars.length * (bw + gap) - gap;
    const startX = (W - total) / 2;
    const maxH = H - 20;
    bars.forEach((b, i) => {
        const x = startX + i * (bw + gap);
        const bh = b.v / 100 * maxH;
        const y = H - 10 - bh;
        const grad = ctx.createLinearGradient(0, y, 0, H - 10);
        grad.addColorStop(0, b.c); grad.addColorStop(1, b.c + '33');
        ctx.fillStyle = grad;
        ctx.beginPath(); ctx.roundRect ? ctx.roundRect(x, y, bw, bh, 4) : ctx.rect(x, y, bw, bh); ctx.fill();
    });
}

function drawStatsBar() {
    const canvas = document.getElementById('statsBarChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.offsetWidth || 400, H = 180;
    canvas.width = W; canvas.height = H;
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    const open = [12, 18, 10, 22, 15, 20], resolved = [8, 14, 9, 18, 12, 17];
    const C = getColors();
    const pad = { t: 10, r: 10, b: 24, l: 30 };
    const cw = W - pad.l - pad.r, ch = H - pad.t - pad.b;
    const max = 25, bw = 14, gap = 8;
    const groupW = months.length * (bw * 2 + gap + 10);
    const gw = cw / months.length;
    for (let i = 0; i <= 5; i++) {
        const y = pad.t + ch - (ch * i / 5);
        ctx.strokeStyle = C.grid; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(pad.l, y); ctx.lineTo(W - pad.r, y); ctx.stroke();
    }
    months.forEach((m, i) => {
        const cx = pad.l + (i + 0.5) * gw;
        const hO = open[i] / max * ch, hR = resolved[i] / max * ch;
        ctx.fillStyle = 'rgba(99,102,241,0.8)';
        ctx.beginPath(); if (ctx.roundRect) ctx.roundRect(cx - bw - 2, pad.t + ch - hO, bw, hO, 3); else ctx.rect(cx - bw - 2, pad.t + ch - hO, bw, hO); ctx.fill();
        ctx.fillStyle = 'rgba(74,222,128,0.8)';
        ctx.beginPath(); if (ctx.roundRect) ctx.roundRect(cx + 2, pad.t + ch - hR, bw, hR, 3); else ctx.rect(cx + 2, pad.t + ch - hR, bw, hR); ctx.fill();
        ctx.fillStyle = C.text; ctx.font = '10px Inter'; ctx.textAlign = 'center';
        ctx.fillText(m, cx, H - 6);
    });
}

function drawStatsPie() {
    const canvas = document.getElementById('statsPieChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.offsetWidth || 300, H = 180;
    canvas.width = W; canvas.height = H;
    const slices = [{ v: 35, c: '#6366f1', l: 'Computer' }, { v: 25, c: '#22d3ee', l: 'Lab' }, { v: 20, c: '#fbbf24', l: 'Classroom' }, { v: 20, c: '#f472b6', l: 'Projector' }];
    const cx = W * 0.38, cy = H / 2, r = 65, inner = 35;
    let angle = -Math.PI / 2;
    slices.forEach(s => {
        const a = s.v / 100 * Math.PI * 2;
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, r, angle, angle + a); ctx.closePath();
        ctx.fillStyle = s.c; ctx.shadowBlur = 8; ctx.shadowColor = s.c; ctx.fill(); ctx.shadowBlur = 0;
        angle += a;
    });
    ctx.beginPath(); ctx.arc(cx, cy, inner, 0, Math.PI * 2); ctx.fillStyle = getColors().bg; ctx.fill();
    const lx = W * 0.68; let ly = H * 0.2;
    slices.forEach(s => {
        ctx.fillStyle = s.c; ctx.beginPath(); ctx.rect(lx, ly, 10, 10); ctx.fill();
        ctx.fillStyle = getColors().text; ctx.font = '11px Inter'; ctx.textAlign = 'left';
        ctx.fillText(`${s.l} ${s.v}%`, lx + 14, ly + 9);
        ly += 22;
    });
}

// ══════════════════════════════════
//   GLOBAL SEARCH
// ══════════════════════════════════
document.getElementById('global-search').addEventListener('input', function () {
    const q = this.value.toLowerCase();
    if (!q) return;
    if (q.includes('complaint')) { showPage('complaints', document.querySelector('[onclick*="complaints"]')); }
    else if (q.includes('book')) { showPage('bookings', document.querySelector('[onclick*="bookings"]')); }
    else if (q.includes('user')) { showPage('users', document.querySelector('[onclick*="users"]')); }
    else if (q.includes('stat')) { showPage('statistics', document.querySelector('[onclick*="statistics"]')); }
});

// ══════════════════════════════════
//   ENTER KEY LOGIN
// ══════════════════════════════════
document.addEventListener('keydown', e => {
    if (e.key === 'Enter' && document.getElementById('login-screen').style.display !== 'none') doLogin();
});
