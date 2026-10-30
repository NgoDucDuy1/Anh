/**
 * ==============================================================================
 * EXAM PRACTICE ENGINE - PHẢN HỒI & GIẢI THÍCH TỨC THÌ
 * ==============================================================================
 * - Bấm vào đáp án: lập tức nhận biết Đúng / Sai
 * - Nếu Đúng: Tô xanh và hiển thị giải thích tại sao đúng
 * - Nếu Sai: Tô đỏ lựa chọn, làm nổi bật đáp án đúng và giải thích cặn kẽ
 * - Tự động cập nhật số câu đúng/sai theo thời gian thực
 * ==============================================================================
 */

class InstantExamApp {
    constructor() {
        this.data = window.EXAM_DATA;
        this.currentUnitId = 1;
        this.userAnswers = {}; // { [qid]: { selected: 'A', isCorrect: true/false } }
        this.userWriting = {}; // { [qid]: { text: '...', revealed: boolean } }

        this.init();
    }

    init() {
        this.initTheme();
        this.loadProgress();
        this.renderUnitTabs();
        this.renderCurrentUnit();
        this.setupEventListeners();
    }

    // --- Quản lý Theme Sáng / Tối ---
    initTheme() {
        const savedTheme = localStorage.getItem("exam_app_theme") || "light";
        document.documentElement.setAttribute("data-theme", savedTheme);
        this.updateThemeIcon(savedTheme);
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("exam_app_theme", newTheme);
        this.updateThemeIcon(newTheme);
    }

    updateThemeIcon(theme) {
        const btn = document.getElementById("themeToggleBtn");
        if (!btn) return;
        if (theme === "dark") {
            btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
            btn.setAttribute("title", "Chuyển sang giao diện Sáng");
        } else {
            btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
            btn.setAttribute("title", "Chuyển sang giao diện Tối");
        }
    }

    // --- Quản lý LocalStorage ---
    saveProgress() {
        const payload = {
            unitId: this.currentUnitId,
            answers: this.userAnswers,
            writing: this.userWriting
        };
        localStorage.setItem(`instant_exam_unit_${this.currentUnitId}`, JSON.stringify(payload));
    }

    loadProgress() {
        const saved = localStorage.getItem(`instant_exam_unit_${this.currentUnitId}`);
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                this.userAnswers = parsed.answers || {};
                this.userWriting = parsed.writing || {};
            } catch (e) {
                console.error("Lỗi đọc dữ liệu:", e);
                this.userAnswers = {};
                this.userWriting = {};
            }
        } else {
            this.userAnswers = {};
            this.userWriting = {};
        }
    }

    // --- Render Tabs Unit ---
    renderUnitTabs() {
        const tabsContainer = document.getElementById("unitTabs");
        if (!tabsContainer) return;

        tabsContainer.innerHTML = this.data.units.map(unit => {
            const isActive = unit.id === this.currentUnitId;
            return `
                <button class="unit-tab-btn ${isActive ? 'active' : ''}" data-unit-id="${unit.id}">
                    <span class="unit-badge">${unit.unitCode}</span>
                    <span>${unit.title}</span>
                </button>
            `;
        }).join("");

        tabsContainer.querySelectorAll(".unit-tab-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const targetId = parseInt(btn.getAttribute("data-unit-id"));
                if (targetId !== this.currentUnitId) {
                    this.switchUnit(targetId);
                }
            });
        });
    }

    switchUnit(unitId) {
        this.currentUnitId = unitId;
        this.loadProgress();
        this.renderUnitTabs();
        this.renderCurrentUnit();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // --- Render Nội dung Unit ---
    renderCurrentUnit() {
        const unit = this.data.units.find(u => u.id === this.currentUnitId);
        if (!unit) return;

        // Cập nhật Header
        document.getElementById("unitTag").textContent = unit.unitCode;
        document.getElementById("unitTitle").textContent = `${unit.unitCode}: ${unit.title}`;

        const mainContent = document.getElementById("unitContent");
        let html = "";

        unit.sections.forEach(section => {
            html += `<div class="section-wrapper">
                <h2 class="section-title">
                    <svg class="section-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>
                    ${section.title}
                </h2>`;

            section.parts.forEach(part => {
                html += `<div class="part-card">
                    <div class="part-header">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                        <span>${part.title}</span>
                    </div>`;

                if (part.passage) {
                    html += `<div class="passage-body">${part.passage}</div>`;
                }

                html += `<div class="questions-container">`;

                part.questions.forEach(q => {
                    if (q.type === "multiple-choice") {
                        html += this.renderMultipleChoiceQuestion(q);
                    } else if (q.type === "sentence-rewrite") {
                        html += this.renderSentenceRewriteQuestion(q);
                    }
                });

                html += `</div></div>`;
            });

            html += `</div>`;
        });

        mainContent.innerHTML = html;
        this.updateLiveStats();
        this.bindEvents();
    }

    renderMultipleChoiceQuestion(q) {
        const record = this.userAnswers[q.id]; // { selected, isCorrect }
        const hasAnswered = Boolean(record);

        let optionsHtml = "";
        const isLongOption = q.options.some(opt => opt.text.length > 25);
        const gridClass = isLongOption ? "" : "grid-2";

        q.options.forEach(opt => {
            let cardClass = "";
            let tagHtml = "";

            if (hasAnswered) {
                if (record.selected === opt.key) {
                    cardClass = record.isCorrect ? "correct" : "wrong";
                } else if (!record.isCorrect && opt.key === q.correctAnswer) {
                    cardClass = "show-correct";
                    tagHtml = `<span class="correct-tag">Đáp án đúng</span>`;
                }
            }

            optionsHtml += `
                <div class="option-card ${cardClass}" data-qid="${q.id}" data-key="${opt.key}">
                    <div class="opt-letter">${opt.key}</div>
                    <div class="opt-text">${opt.text}</div>
                    ${tagHtml}
                </div>
            `;
        });

        // Hộp giải thích hiển thị ngay khi đã chọn
        let explanationHtml = "";
        if (hasAnswered && q.explanation) {
            if (record.isCorrect) {
                explanationHtml = `
                    <div class="explanation-box correct-box">
                        <div class="exp-header">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 12 2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
                            <span>Chính xác! Đáp án ${q.correctAnswer}</span>
                            <span class="exp-badge">Giải thích vì sao đúng</span>
                        </div>
                        <div class="exp-content">${q.explanation}</div>
                    </div>
                `;
            } else {
                explanationHtml = `
                    <div class="explanation-box wrong-box">
                        <div class="exp-header">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
                            <span>Chưa chính xác! Bạn chọn ${record.selected} &mdash; Đáp án đúng là ${q.correctAnswer}</span>
                            <span class="exp-badge">Giải thích rõ ràng</span>
                        </div>
                        <div class="exp-content">${q.explanation}</div>
                    </div>
                `;
            }
        }

        return `
            <div class="question-item" id="q_box_${q.id}">
                <div class="question-title-row">
                    <span class="q-badge">Câu ${q.num}</span>
                    <div class="q-text">${q.questionText}</div>
                </div>
                <div class="options-list ${gridClass}">
                    ${optionsHtml}
                </div>
                <div class="exp-container" id="exp_${q.id}">
                    ${explanationHtml}
                </div>
            </div>
        `;
    }

    renderSentenceRewriteQuestion(q) {
        const writeData = this.userWriting[q.id] || { text: "", revealed: false };
        let resultBox = "";

        if (writeData.revealed) {
            resultBox = `
                <div class="sample-answer-box">
                    <strong>Đáp án chuẩn:</strong> ${q.sampleAnswer}<br>
                    <div style="margin-top: 0.375rem; color: var(--text-secondary); font-size: 0.8125rem;">
                        <strong>Giải thích:</strong> ${q.explanation || ''}
                    </div>
                </div>
            `;
        }

        return `
            <div class="rewrite-card" id="q_box_${q.id}">
                <div class="question-title-row">
                    <span class="q-badge">Câu ${q.num}</span>
                    <div class="q-text">Viết lại câu sao cho nghĩa không đổi:</div>
                </div>
                <div class="orig-sentence">${q.originalSentence}</div>
                <div class="rewrite-input-group">
                    <label class="rewrite-prompt">→ ${q.promptText}</label>
                    <input type="text" class="rewrite-input" data-qid="${q.id}" 
                           placeholder="Nhập phần tiếp theo của câu..." 
                           value="${writeData.text}">
                </div>
                <button class="check-answer-btn" data-qid="${q.id}">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h20"/><path d="m15 5 7 7-7 7"/></svg>
                    <span>${writeData.revealed ? "Ẩn đáp án & giải thích" : "Xem đáp án & giải thích"}</span>
                </button>
                <div class="rewrite-exp-container" id="rewrite_exp_${q.id}">
                    ${resultBox}
                </div>
            </div>
        `;
    }

    // --- Xử lý sự kiện bấm chọn đáp án ---
    bindEvents() {
        // Xử lý click trắc nghiệm
        document.querySelectorAll(".option-card").forEach(card => {
            card.addEventListener("click", () => {
                const qid = parseInt(card.getAttribute("data-qid"));
                const key = card.getAttribute("data-key");
                this.handleOptionSelect(qid, key);
            });
        });

        // Xử lý viết lại câu
        document.querySelectorAll(".rewrite-input").forEach(input => {
            input.addEventListener("input", (e) => {
                const qid = parseInt(input.getAttribute("data-qid"));
                if (!this.userWriting[qid]) {
                    this.userWriting[qid] = { text: "", revealed: false };
                }
                this.userWriting[qid].text = e.target.value;
                this.saveProgress();
            });
        });

        // Nút xem đáp án viết lại câu
        document.querySelectorAll(".check-answer-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const qid = parseInt(btn.getAttribute("data-qid"));
                if (!this.userWriting[qid]) {
                    this.userWriting[qid] = { text: "", revealed: false };
                }
                this.userWriting[qid].revealed = !this.userWriting[qid].revealed;
                this.saveProgress();
                this.renderCurrentUnit();
            });
        });
    }

    handleOptionSelect(qid, selectedKey) {
        // Tìm câu hỏi trong dữ liệu
        const unit = this.data.units.find(u => u.id === this.currentUnitId);
        let targetQuestion = null;

        for (const s of unit.sections) {
            for (const p of s.parts) {
                const found = p.questions.find(q => q.id === qid);
                if (found) {
                    targetQuestion = found;
                    break;
                }
            }
            if (targetQuestion) break;
        }

        if (!targetQuestion) return;

        const isCorrect = selectedKey === targetQuestion.correctAnswer;
        this.userAnswers[qid] = {
            selected: selectedKey,
            isCorrect: isCorrect
        };

        this.saveProgress();

        // Cập nhật DOM trực tiếp cho câu này để trải nghiệm tức thì, không bị giật trang
        const qBox = document.getElementById(`q_box_${qid}`);
        if (qBox) {
            const options = qBox.querySelectorAll(".option-card");
            options.forEach(opt => {
                opt.classList.remove("correct", "wrong", "show-correct");
                const oldTag = opt.querySelector(".correct-tag");
                if (oldTag) oldTag.remove();

                const optKey = opt.getAttribute("data-key");
                if (optKey === selectedKey) {
                    opt.classList.add(isCorrect ? "correct" : "wrong");
                } else if (!isCorrect && optKey === targetQuestion.correctAnswer) {
                    opt.classList.add("show-correct");
                    const tag = document.createElement("span");
                    tag.className = "correct-tag";
                    tag.textContent = "Đáp án đúng";
                    opt.appendChild(tag);
                }
            });

            // Cập nhật hộp giải thích
            const expContainer = document.getElementById(`exp_${qid}`);
            if (expContainer) {
                if (isCorrect) {
                    expContainer.innerHTML = `
                        <div class="explanation-box correct-box">
                            <div class="exp-header">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 12 2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
                                <span>Chính xác! Đáp án ${targetQuestion.correctAnswer}</span>
                                <span class="exp-badge">Giải thích vì sao đúng</span>
                            </div>
                            <div class="exp-content">${targetQuestion.explanation}</div>
                        </div>
                    `;
                } else {
                    expContainer.innerHTML = `
                        <div class="explanation-box wrong-box">
                            <div class="exp-header">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
                                <span>Chưa chính xác! Bạn chọn ${selectedKey} &mdash; Đáp án đúng là ${targetQuestion.correctAnswer}</span>
                                <span class="exp-badge">Giải thích rõ ràng</span>
                            </div>
                            <div class="exp-content">${targetQuestion.explanation}</div>
                        </div>
                    `;
                }
            }
        }

        this.updateLiveStats();
    }

    // --- Cập nhật Thống Kê Thời Gian Thực ---
    updateLiveStats() {
        const unit = this.data.units.find(u => u.id === this.currentUnitId);
        if (!unit) return;

        let totalMc = 0;
        unit.sections.forEach(s => {
            s.parts.forEach(p => {
                p.questions.forEach(q => {
                    if (q.type === "multiple-choice") totalMc++;
                });
            });
        });

        let answeredCount = 0;
        let correctCount = 0;
        let wrongCount = 0;

        Object.keys(this.userAnswers).forEach(qid => {
            // Kiểm tra câu này có thuộc unit hiện tại không
            const isInsideUnit = unit.sections.some(s => s.parts.some(p => p.questions.some(q => q.id == qid)));
            if (isInsideUnit) {
                answeredCount++;
                if (this.userAnswers[qid].isCorrect) {
                    correctCount++;
                } else {
                    wrongCount++;
                }
            }
        });

        document.getElementById("statAnswered").textContent = `${answeredCount}/${totalMc}`;
        document.getElementById("statCorrect").textContent = correctCount;
        document.getElementById("statWrong").textContent = wrongCount;

        const percent = totalMc > 0 ? Math.round((answeredCount / totalMc) * 100) : 0;
        document.getElementById("progressBar").style.width = `${percent}%`;
    }

    // --- Làm lại bài ---
    resetUnit() {
        if (!confirm("Bạn có muốn xóa toàn bộ kết quả đã chọn để làm lại Unit này từ đầu không?")) {
            return;
        }
        this.userAnswers = {};
        this.userWriting = {};
        localStorage.removeItem(`instant_exam_unit_${this.currentUnitId}`);
        this.renderCurrentUnit();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    setupEventListeners() {
        document.getElementById("themeToggleBtn").addEventListener("click", () => this.toggleTheme());
        document.getElementById("headerResetBtn").addEventListener("click", () => this.resetUnit());
    }
}

document.addEventListener("DOMContentLoaded", () => {
    window.app = new InstantExamApp();
});
