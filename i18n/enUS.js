const i18n_enUS = {
    navigation: {
        about: 'About',
        note: 'Note',
        projects: 'Projects',
    },
    profile: {
        blockquoteDescription:
            '<b>Freely</b> accessible technology for all.<br/>Solving real-world problems through computing.',
        blockquoteCite: '—Dreaming of Full-stack, <cite>SeungHyeon Kim</cite>',
        weatherLocation: 'Seoul',
        weatherLoading: 'Loading weather data...',
        weatherUnavailable: 'Weather data is unavailable.',
        githubLabel: 'Go to GitHub profile',
        spotifyLabel: 'Go to Spotify profile',
        gearLabel: 'View my gear',
        gearCloseLabel: 'Close gear modal',
        skillsTitle: 'Tech Stack',
        experienceTitle: 'Experience',
    },
    pages: {
        noteTitle: 'My Notes',
        noteDescription:
            'A place to collect notes about development and daily work.',
        projectsTitle: 'Projects',
        projectsDescription:
            'A collection of finished and in-progress projects.',
        notFoundTitle: '404',
        notFoundDescription: 'The page you requested could not be found.',
        notFoundAction: 'Back to home',
        noteBackButton: '← Back to list',
    },
    notes: {
        csBasics: {
            title: '(CS) Data Structures Basics',
            date: '03.09.',
            description:
                'Understanding data structure concepts, ideal characteristics, and time vs memory trade-offs',
            tags: ['Data Structure', 'Basics', 'CS'],
            id: 'cs-basics',
            category: '2026',
            content: `## Data Structures

- Abstract Data Type (ADT): Conceptual model that defines data and operations applicable to that data
- Algorithm: A set of clear steps or procedures to solve a problem
- Data Structure: Concrete implementation that defines how to organize and store data
- Data Structure Implementation: Actual implementation of a data structure in a specific programming language

## Ideal Data Structure

There is no perfect data structure, but an ideal data structure would have the following characteristics:

- Fast: Operations should be performed quickly
- Low Memory Usage: Efficient use of memory
- Simple: Implementation should be simple and easy to understand

However, in reality, there is no data structure that satisfies all of these. Therefore, we must choose a data structure suitable for the specific situation.

## Trade-offs

**Speed (Time) vs Memory**

- Array: Provides fast access but has fixed size and slow insertion/deletion
- Linked List: Fast insertion/deletion but slow access time

**Simplicity vs Generality**

- Array: Widely used but has fixed size and slow insertion/deletion
- Linked List: Simple structure but slower access than arrays

## Conclusion

**Studying data structures = Understanding trade-offs**

Since different situations require different data structures, it is important to understand trade-offs and choose the appropriate data structure.`,
        },
        queue: {
            title: '(CS) Queue',
            date: '03.12.',
            description:
                'FIFO (First In, First Out) queue structure, main operations (enqueue, dequeue, front), practice problems',
            tags: ['Queue', 'Data Structure', 'Basics'],
            id: 'queue',
            category: '2026',
            content: `## What is a Queue?

A queue is a FIFO (First In, First Out) data structure where the first element added is the first element removed. Queues are used in task scheduling, breadth-first search, printer queues, etc.

### Main Queue Operations

- enqueue: Operation to add an element to the rear of the queue.
- dequeue: Operation to remove and return the element at the front of the queue.
- front: Operation to return the front element without removing it.
- isEmpty: Operation to check if the queue is empty.
- size: Operation to return the number of elements in the queue.

### Example Problem (Baekjoon 18258 Queue 2)

Implement a queue and handle commands accordingly.

- push X: Add integer X to the queue
- pop: Remove and print the first integer in the queue. Print -1 if empty
- size: Print the number of integers in the queue
- empty: Print 1 if empty, 0 otherwise
- front: Print the first integer in the queue. Print -1 if empty
- back: Print the last integer in the queue. Print -1 if empty`,
        },
        stack: {
            title: '(CS) Stack',
            date: '03.16.',
            description:
                'LIFO (Last In, First Out) stack structure, main operations (push, pop, top), practice problems',
            tags: ['Stack', 'Data Structure', 'Basics'],
            id: 'stack',
            category: '2026',
            content: `## What is a Stack?

A stack is a LIFO (Last In, First Out) data structure where the most recently added element is the first one to be removed. Stacks are used in function calls, parenthesis checking, undo functionality, and more.

### Main Stack Operations

- push: Operation to add an element to the top of the stack.
- pop: Operation to remove and return the element at the top of the stack.
- top (peek): Operation to return the top element without removing it.
- isEmpty: Operation to check if the stack is empty.

### Example Problem (Baekjoon 28278 Stack 2)

Implement a stack and handle commands accordingly.

- push X: Add integer X to the stack
- pop: Remove and print the top integer in the stack. Print -1 if empty
- size: Print the number of integers in the stack
- empty: Print 1 if empty, 0 otherwise
- top: Print the top integer in the stack. Print -1 if empty`,
        },
        linuxFind: {
            title: '(Linux) find command',
            date: '05.13.',
            description:
                'How to find files and directories with the find command, various expressions and options',
            tags: ['directory', 'file', 'command'],
            id: 'linux-find',
            category: '2025',
            content: `## The find Command: Finding Files and Directories

The find command is used in Linux to search for files or directories.

The basic syntax is:

\`\`\`
$ find [path] [option] [expression]
\`\`\`

The arguments to the find command are divided into two main types:

- Options: Control how the command is executed
- Expressions: Define which files to find

### Common Expressions

**1. Name/Path Related**
- -name pattern: Filename matches pattern
- -iname pattern: Case-insensitive name match
- -path pattern: Full path matches pattern

**2. File Type Related**
- -type c: When file type is c
  - f: Regular file
  - d: Directory
  - l: Symbolic link

**3. File Size Related**
- -size n[cwbkMG]: Compare file size
  - c: byte
  - k: KB
  - M: MB

**4. Time Related**
- -mtime n: Modified n days ago
- -atime n: Last accessed n days ago
- -newer file: More recently modified than file

**5. Permission/Owner Related**
- -user username: Owner is username
- -perm mode: Permissions match exactly

**6. Link Related**
- -links n: Hard link count is n
- -samefile file: Same inode as file

**7. Structure/Other Conditions**
- -empty: Empty file or directory

**8. Execution/Output Related**
- -exec command {} \\;: Execute command for each file
- -print: Print path

**9. Logical Operators**
- -a or omitted: AND (both true)
- -o: OR (at least one true)
- !: NOT (negation)

### Usage Examples

**Find .log files modified within the last 7 days in the home directory**
\`\`\`
$ find ~ -name "*.log" -mtime -7
\`\`\`

**Find setuid binaries larger than 1MB in system root**
\`\`\`
$ sudo find / -xdev -type f -size +1M -perm /4000
\`\`\`

**Remove empty directories in current directory**
\`\`\`
$ find . -O2 -type d -empty -mindepth 1 -maxdepth 3 -exec rm -r {} +
\`\`\``,
        },
        nextjsSsr: {
            title: '(Next.js) SSR vs CSR',
            date: '04.23.',
            description:
                'Understanding Server Side Rendering (SSR) and Client Side Rendering (CSR) concepts and differences',
            tags: ['React', 'Javascript', 'Next.js'],
            id: 'nextjs-ssr',
            category: '2025',
            content: `## SSR and CSR

The difference between SSR (Server Side Rendering) and CSR (Client Side Rendering) is as follows.

First, it is important to understand the concept of Rendering to grasp these concepts.

In React, Rendering refers to the process of generating the UI from React components and converting it to browser DOM. Simply put, it is the process of converting React JavaScript files to HTML.

### CSR (Client Side Rendering)

Regular React created with CRA (Create React App) uses CSR.

In CSR, as the name suggests, the Client (user's browser) handles this process. Because of this, CSR has the following disadvantages:

- Must download and convert large amounts of JavaScript files
- Before conversion, HTML has no content, causing blank screens during loading

### SSR (Server Side Rendering)

Next.js uses SSR where when a user sends a request to the server, the server executes JavaScript files and renders to HTML, then sends the completed HTML file as a response. This approach addresses the disadvantages of CSR:

- Only need to download relatively less JavaScript files
- Receive pre-rendered HTML from the server, so there is no blank screen during initial loading
- Subsequently, dynamic functionality is activated through the Hydration process on the client`,
        },
        nextjsHydration: {
            title: '(Next.js) Hydration',
            date: '04.23.',
            description:
                'Understanding Hydration concept, use client directive, process, and cautions',
            tags: ['Hydration', 'component', 'Next.js'],
            id: 'nextjs-hydration',
            category: '2025',
            content: `## What is Hydration?

Hydration refers to the process of connecting dynamic JavaScript functionality to components in the browser.

SSR receives pre-rendered HTML files. Since these HTML files don't contain JavaScript code that allows for interactive functionality, we must activate dynamic features through a process called Hydration.

For example, React code like useState and useQuery cannot be used in pre-rendered HTML without the Hydration process.

### The Concept of Hydration

Hydration is like watering plants - it is the concept of 'injecting' dynamic functionality into static HTML.

HTML shows only the surface appearance, like a dehydrated berry. HTML contains only the structure and appearance of the page, without the actual interactive functionality.

For example, even if a Button with useState is rendered, it won't work properly until Hydration occurs.

When JavaScript is injected through Hydration, the page becomes interactive like a fresh berry.

In other words, Hydration is the process of connecting static HTML to React in the browser, activating it to work dynamically.

### Distinguishing Hydration with 'use client'

Hydration does not occur on all components. In fact, if Hydration is needed heavily in an SSR service, it likely means poorly written code.

Much Hydration means users must download large amounts of JavaScript, making it no different from CSR.

Therefore, Next.js follows the principle of handling rendering on the server (SSR) by default, with Hydration only on necessary components.

To distinguish Hydration components, write \`'use client'\` at the top of the component file.

\`'use client'\` is a directive that marks a component as a client component. When used, Hydration occurs only on that component, while the rest is processed as SSR.

### Cautions with Hydration

When \`'use client'\` directive is applied to a component and Hydration occurs, all child components of that component are also treated as client components.

This is because even if child components contain 'use server' directives, if the parent component renders with \`'use client'\`, it will be rendered on the client side.`,
        },
    },
    footer: {
        copyright: '© 2026 Seunghyeon Kim. All rights reserved.',
        contactLabel: 'Contact',
        followLabel: 'Follow',
        githubUrl: 'https://github.com',
        twitterUrl: 'https://twitter.com',
    },
    theme: {
        darkMode: 'Dark Mode',
        lightMode: 'Light Mode',
        systemDefault: 'System Default',
    },
    language: {
        korean: '한국어',
        english: 'English',
    },
};
