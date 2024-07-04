document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    const links = document.querySelectorAll('a');
    const modal = document.querySelector('.modal');
    const modalContent = document.getElementById('modal-text');
    const closeModal = document.querySelector('.close');
    const toggleDarkModeButton = document.getElementById('toggle-dark-mode');
    const toggleDarkModeButtonW = document.getElementById('toggle-dark-modeW');
    const gallery = document.getElementById('gallery');
    const body = document.body;
    const easterEgg = document.getElementById('easter-egg');

    const projectDetails = {
        'invoicing': {
            description: `
                <h2>Custom Invoicing Program for Businesses</h2>
                <p>Welcome to my Custom Invoicing Program, a comprehensive solution designed to streamline the invoicing and quoting process for any business. This desktop application combines powerful functionalities with an intuitive user interface to ensure efficient management of business transactions.</p>
                <h3>Key Features:</h3>
                <ul>
                    <h4>User-Friendly Interface:</h4>
                    <ul>
                        <li>Responsive design ensuring usability on various screen sizes.</li>
                    </ul>
                    <h4>Invoicing and Quoting:</h4>
                    <ul>
                        <li>Easily create, save, and manage invoices and quotes.</li>
                        <li>Automatically calculate totals and apply GST for accurate financial records.</li>
                    </ul>
                    <h4>Customer Management:</h4>
                    <ul>
                        <li>Maintain a detailed database of customers.</li>
                        <li>Quickly populate customer details in invoices and quotes by selecting from the stored list.</li>
                    </ul>
                    <h4>Business Details Management:</h4>
                    <ul>
                        <li>Store and edit business information.</li>
                    </ul>
                    <h4>Service Management:</h4>
                    <ul>
                        <li>Add, edit, and delete service entries for each invoice or quote.</li>
                        <li>Supports multiple service types including Electrical Wiring, Lighting Installation, Appliance Installation, Electrical Repair, and more.</li>
                    </ul>
                    <h4>PDF Generation:</h4>
                    <ul>
                        <li>Automatically generate and save PDFs of invoices and quotes.</li>
                        <li>Customize documents with your business logo and include disclaimers for quotes.</li>
                        <li>View and open generated PDFs directly from the application.</li>
                    </ul>
                    <h4>Structured Storage:</h4>
                    <ul>
                        <li>Organize invoices and quotes in a structured directory by year and month.</li>
                        <li>Ensures easy access and management of documents.</li>
                    </ul>
                    <h4>Backup Functionality:</h4>
                    <ul>
                        <li>Backup all invoices and quotes to a specified location for data security.</li>
                        <li>Simplifies the process of creating backups with a single click.</li>
                    </ul>
                    <h4>Help and Support:</h4>
                    <ul>
                        <li>Comprehensive help section to guide users on how to use the application.</li>
                        <li>Detailed user guide covering all features and functionalities.</li>
                    </ul>
                </ul>
            `,
            images: [
                'invoicing_1.png'
            ]
        },
        'ev-parking': {
            description: `
                <h2>EV Parking and Charging Web Application</h2>
                <p>The EV Parking and Charging Web Application was a project I worked on from February 2023 to November 2023. I was both a quality supervisor and developer, leading the creation of a web solution to manage electric vehicle parking and charging stations. I worked closely with the clients, CSIRO and the Victorian Hydrogen Hub, to ensure the application met their needs. My responsibilities included overseeing the entire development process, managing the database, and making sure the user interface was easy to use and visually appealing.</p>
            `,
            images: [
                'ev_parking_2.png',
                'ev_parking_1.png'
            ]
        },
        'workout-planner': {
            description: `
                <h2>Workout Planner</h2>
                <p>The Workout Planner is a web application developed from December 2023 to January 2024. It helps users plan and track their workouts, providing a comprehensive tool for fitness enthusiasts. Built using Flutter and Firebase, the app ensures real-time data synchronization across platforms, including iOS and Android. Additionally, the app features an AI-powered recommendation system to offer personalized fitness advice.</p>
                <h3>Key Features:</h3>
                <ul>
                    <h4>Workout Planning:</h4>
                    <ul>
                        <li>Create and manage custom workout plans.</li>
                    </ul>
                    <h4>AI Recommendations:</h4>
                    <ul>
                        <li>Receive personalized fitness advice based on user data and preferences.</li>
                    </ul>
                    <h4>User Interface:</h4>
                    <ul>
                        <li>Intuitive design for easy navigation and usage.</li>
                    </ul>
                </ul>
            `,
            images: [
                'workout_planner_1.png'
            ]
        },
        'ios-location-simulator': {
            description: `
                <h2>iOS Location Simulator</h2>
                <p>The iOS Location Simulator is a utility application designed to simulate different GPS locations on iOS devices. This tool is particularly useful for developers testing location-based applications and features.</p>
                <h3>Key Features:</h3>
                <ul>
                    <h4>GPS Simulation:</h4>
                    <ul>
                        <li>Simulate GPS locations on iOS devices for app testing.</li>
                    </ul>
                    <h4>Interface:</h4>
                    <ul>
                        <li>Easy-to-use interface for selecting and simulating different coordinates.</li>
                    </ul>
                    <h4>Presets:</h4>
                    <ul>
                        <li>Support for saving and loading custom location presets.</li>
                    </ul>
                    <h4>Real-Time Updates:</h4>
                    <ul>
                        <li>Real-time location updates to the connected device.</li>
                    </ul>
                    <h4>Compatibility:</h4>
                    <ul>
                        <li>Compatibility with various iOS versions and devices.</li>
                    </ul>
                </ul>
                <p>GitHub URL: <a href="https://github.com/FButros/IOSLocationSimulator" target="_blank">https://github.com/FButros/IOSLocationSimulator</a></p>
            `,
            images: []
        },
        'downloads-organiser': {
            description: `
                <h2>Download Files Organiser</h2>
                <p>The Downloads Organiser is a desktop application designed to automatically organize files in your Downloads folder. By categorizing files based on their type and moving them to predefined folders, this tool helps maintain a clutter-free environment on your computer.</p>
                <h3>Key Features:</h3>
                <ul>
                    <h4>Automatic Categorization:</h4>
                    <ul>
                        <li>Automatically categorizes and moves files from the Downloads folder to appropriate directories.</li>
                    </ul>
                    <h4>File Type Support:</h4>
                    <ul>
                        <li>Supports a wide range of file types, including documents, images, videos, and executables.</li>
                    </ul>
                    <h4>Customizable Destinations:</h4>
                    <ul>
                        <li>Customizable folder destinations for each file type.</li>
                    </ul>
                    <h4>User Interface:</h4>
                    <ul>
                        <li>User-friendly interface for easy setup and configuration.</li>
                    </ul>
                    <h4>Regular Updates:</h4>
                    <ul>
                        <li>Regular updates to ensure compatibility with new file types and system updates.</li>
                    </ul>
                </ul>
                <p>GitHub URL: <a href="https://github.com/FButros/DownloadsOrganiser" target="_blank">https://github.com/FButros/DownloadsOrganiser</a></p>
            `,
            images: []
        }
    };

    function handleCursorMove(e) {
        cursor.style.top = `${e.clientY}px`;
        cursor.style.left = `${e.clientX}px`;
    }

    document.addEventListener('mousemove', handleCursorMove);

    if ('ontouchstart' in window || navigator.maxTouchPoints) {
        cursor.style.display = 'none';
    }

    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.style.width = '30px';
            cursor.style.height = '30px';
            cursor.style.border = '2px solid #ffa726';
            cursor.style.backgroundColor = '#ffa726';
        });
        link.addEventListener('mouseleave', () => {
            cursor.style.width = '15px';
            cursor.style.height = '15px';
            cursor.style.border = '2px solid #333';
            cursor.style.backgroundColor = 'transparent';
        });
    });

    document.querySelectorAll('a[data-project]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const projectKey = e.target.getAttribute('data-project');
            modalContent.innerHTML = projectDetails[projectKey].description;
            gallery.innerHTML = projectDetails[projectKey].images.map(src => `
                <a href="${src}" data-lightbox="${projectKey}" data-title="Project image"><img src="${src}" alt="Project image"></a>
            `).join('');
            modal.style.display = 'flex';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    toggleDarkModeButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        document.querySelector('.sidebar').classList.toggle('dark-mode');
        document.querySelector('.content').classList.toggle('dark-mode');
        modalContent.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.removeItem('dark-mode');
        }
    });

    toggleDarkModeButtonW.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        document.querySelector('.sidebar').classList.toggle('dark-mode');
        document.querySelector('.content').classList.toggle('dark-mode');
        modalContent.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.removeItem('dark-mode');
        }
    });

    gsap.from('.profile h1', { duration: 1, x: -200, opacity: 0, ease: 'power3.out' });
    gsap.from('.profile h2', { duration: 1, x: 200, opacity: 0, ease: 'power3.out', delay: 0.2 });
    gsap.from('.profile p', { duration: 1, y: 100, opacity: 0, ease: 'power3.out', delay: 0.4 });
    gsap.from('.navigation ul li', { duration: 1, y: 100, opacity: 0, stagger: 0.2, ease: 'power3.out', delay: 0.6 });
    gsap.from('.social-links a', { duration: 1, y: 100, opacity: 0, stagger: 0.2, ease: 'power3.out', delay: 1 });

    tsParticles.load("background-animation", {
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse"
                },
                onClick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4
                },
                push: {
                    quantity: 4
                }
            }
        },
        particles: {
            number: {
                value: 100,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#00aaff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#00aaff"
                },
                polygon: {
                    nb_sides: 5
                }
            },
            opacity: {
                value: 0.01,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#00aaff",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2, // Slower speed
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        retina_detect: true
    });

    let rightClickCount = 0;
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        rightClickCount++;
        if (rightClickCount === 5) {
            showEasterEgg();
            rightClickCount = 0;
        }
    });

    function showEasterEgg() {
        easterEgg.style.display = 'block';
        gsap.fromTo('.easter-egg', { scale: 0 }, { scale: 1, duration: 1, ease: 'elastic.out(1, 0.5)' });
        setTimeout(() => {
            gsap.to('.easter-egg', { scale: 0, duration: 1, ease: 'elastic.in(1, 0.5)', onComplete: () => {
                easterEgg.style.display = 'none';
            }});
        }, 3000);
    }

    document.querySelectorAll('.navigation a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            document.querySelector('.content').scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    window.addEventListener('resize', debounce(() => {
        console.log('Window resized');
    }, 250));
});