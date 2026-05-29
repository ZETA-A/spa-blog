function renderNotesList() {
    const notesByCategory = {
        2026: [],
        2025: [],
    };

    Object.values(i18n.notes).forEach((note) => {
        if (!notesByCategory[note.category]) {
            notesByCategory[note.category] = [];
        }

        notesByCategory[note.category].push(note);
    });

    return /*html*/ `
        <section class="page-view">
            <div class="notes-container">
                ${Object.entries(notesByCategory)
                    .reverse()
                    .map(
                        ([year, notes]) => `
                    <div class="notes-year">
                        <h2 class="year-title">${year}</h2>
                        <div class="sticky-notes-grid">
                            ${notes
                                .sort(
                                    (a, b) =>
                                        parseNoteDate(year, b.date) -
                                        parseNoteDate(year, a.date),
                                )
                                .map(
                                    (note) => `
                                <a href="#/note/${note.id}" class="sticky-note color-${getStableNoteIndex(note.id, 4) + 1}" style="--note-rotation: ${getStableRotation(note.id)}deg;">
                                    <div class="sticky-pin">📌</div>
                                    <h3 class="sticky-title">${note.title}</h3>
                                    <p class="sticky-date">${note.date}</p>
                                    <p class="sticky-description">${note.description}</p>
                                    <div class="sticky-tags">
                                        ${note.tags.map((tag) => `<span class="sticky-tag">#${tag}</span>`).join('')}
                                    </div>
                                </a>
                            `,
                                )
                                .join('')}
                        </div>
                    </div>
                `,
                    )
                    .join('')}
            </div>
        </section>
    `;
}

function parseNoteDate(year, date) {
    const [month = '1', day = '1'] = date.match(/\d+/g) || [];

    return new Date(Number(year), Number(month) - 1, Number(day));
}

function getStableNoteIndex(value, modulo) {
    return [...value].reduce((sum, char) => sum + char.charCodeAt(0), 0) % modulo;
}

function getStableRotation(value) {
    return (getStableNoteIndex(value, 9) - 4) * 0.45;
}

function escapeHtml(value) {
    return String(value)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
}

function renderMarkdown(content) {
    const lines = content.split('\n');
    const html = [];
    let inCodeBlock = false;
    let inList = false;

    const closeList = () => {
        if (inList) {
            html.push('</ul>');
            inList = false;
        }
    };

    lines.forEach((line) => {
        if (line.startsWith('```')) {
            if (inCodeBlock) {
                html.push('</code></pre>');
                inCodeBlock = false;
            } else {
                closeList();
                html.push('<pre><code>');
                inCodeBlock = true;
            }
            return;
        }

        if (inCodeBlock) {
            html.push(escapeHtml(line));
            return;
        }

        if (line.trim() === '') {
            closeList();
            return;
        }

        if (line.startsWith('## ')) {
            closeList();
            html.push(`<h2>${escapeHtml(line.substring(3))}</h2>`);
            return;
        }

        if (line.startsWith('### ')) {
            closeList();
            html.push(`<h3>${escapeHtml(line.substring(4))}</h3>`);
            return;
        }

        if (line.startsWith('- ')) {
            if (!inList) {
                html.push('<ul>');
                inList = true;
            }
            html.push(`<li>${escapeHtml(line.substring(2))}</li>`);
            return;
        }

        closeList();

        if (line.startsWith('**') && line.endsWith('**')) {
            html.push(
                `<p><strong>${escapeHtml(line.substring(2, line.length - 2))}</strong></p>`,
            );
            return;
        }

        html.push(`<p>${escapeHtml(line)}</p>`);
    });

    closeList();

    if (inCodeBlock) {
        html.push('</code></pre>');
    }

    return html.join('\n');
}

function renderNoteDetail(noteData) {
    return /*html*/ `
        <section class="page-view note-detail-view">
            <div class="note-detail-header">
                <a href="#/note" class="note-back-link">${i18n.pages.noteBackButton}</a>
            </div>
            <article class="note-detail-content">
                <div class="note-detail-meta">
                    <h1 class="note-detail-title">${noteData.title}</h1>
                    <p class="note-detail-date">${noteData.date}</p>
                    <div class="note-detail-tags">
                        ${noteData.tags.map((tag) => `<span class="note-detail-tag">#${tag}</span>`).join('')}
                    </div>
                </div>
                <div class="note-detail-body markdown-content">
                    ${renderMarkdown(noteData.content)}
                </div>
            </article>
        </section>
    `;
}
