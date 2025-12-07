<script lang="ts">
// 定义数据类型和数据
export interface Task {
    id: number
    taskName: string
    taskType: string
    taskTitle: string
    status: 'In Progress' | 'Backlog' | 'Todo' | 'Done' | 'Canceled'
    priority: 'Medium' | 'High' | 'Low'
}

export const tasksData: Task[] = [
    {
        id: 1,
        taskName: 'TASK-8782',
        taskType: 'Documentation',
        taskTitle: "You can't compress the program without quantifying the open-source SSD...",
        status: 'In Progress',
        priority: 'Medium',
    },
    {
        id: 2,
        taskName: 'TASK-7878',
        taskType: 'Documentation',
        taskTitle: 'Try to calculate the EXE feed, maybe it will index the multi-byte pixel!',
        status: 'Backlog',
        priority: 'Medium'
    },
    {
        id: 3,
        taskName: 'TASK-7839',
        taskType: 'Bug',
        taskTitle: "We need to bypass the neural TCP card!",
        status: 'Todo',
        priority: 'High'
    },
    {
        id: 4,
        taskName: 'TASK-5562',
        taskType: 'Feature',
        taskTitle: "The SAS interface is down, bypass the open-source pixel so we can back up the application!",
        status: 'Backlog',
        priority: 'Medium'
    },
    {
        id: 5,
        taskName: 'TASK-8686',
        taskType: 'Feature',
        taskTitle: "I'll parse the wireless SSL protocol, that should driver the API panel!",
        status: 'Done',
        priority: 'Medium'
    },
    {
        id: 6,
        taskName: 'TASK-1280',
        taskType: 'Bug',
        taskTitle: "Use the digital TLS panel, then you can transmit the haptic system!",
        status: 'Backlog',
        priority: 'Low'
    },
    {
        id: 7,
        taskName: 'TASK-7262',
        taskType: 'Feature',
        taskTitle: "The UTF8 application is down, parse the neural bandwidth so we can back up the transmitter!",
        status: 'Canceled',
        priority: 'Medium'
    },
    {
        id: 8,
        taskName: 'TASK-1138',
        taskType: 'Feature',
        taskTitle: "Generating the driver won't do anything, we need to quantify the 1080p SM...",
        status: 'Done',
        priority: 'High'
    },
    {
        id: 9,
        taskName: 'TASK-7184',
        taskType: 'Feature',
        taskTitle: "We need to program the back-end THX pixel!",
        status: 'In Progress',
        priority: 'Medium'
    },
    {
        id: 10,
        taskName: 'TASK-5160',
        taskType: 'Documentation',
        taskTitle: "Calculating the bus won't do anything, we need to navigate the back-end JSON protocol!",
        status: 'Todo',
        priority: 'Low'
    },
    {
        id: 11,
        taskName: 'TASK-5618',
        taskType: 'Documentation',
        taskTitle: "Generating the driver won't do anything, we need to index the online SSL application!",
        status: 'In Progress',
        priority: 'Medium'
    },
    {
        id: 12,
        taskName: 'TASK-6699',
        taskType: 'Documentation',
        taskTitle: "I'll transmit the wireless JBOD capacitor, that should hard drive the SSD feed!",
        status: 'In Progress',
        priority: 'Medium'
    },
    {
        id: 13,
        taskName: 'TASK-2858',
        taskType: 'Bug',
        taskTitle: "We need to override the online UDP bus!",
        status: 'In Progress',
        priority: 'High'
    },
    {
        id: 14,
        taskName: 'TASK-9864',
        taskType: 'Bug',
        taskTitle: "I'll reboot the 1080p FTP panel, that should matrix the HEX hard drive!",
        status: 'Todo',
        priority: 'Medium'
    },
    {
        id: 15,
        taskName: 'TASK-8404',
        taskType: 'Bug',
        taskTitle: "We need to generate the virtual HEX alarm!",
        status: 'In Progress',
        priority: 'Low'
    },
    {
        id: 16,
        taskName: 'TASK-5365',
        taskType: 'Documentation',
        taskTitle: "Backing up the pixel won't do anything, we need to transmit the primary IB array!",
        status: 'In Progress',
        priority: 'Medium'
    },
    {
        id: 17,
        taskName: 'TASK-1780',
        taskType: 'Documentation',
        taskTitle: "The CSS feed is down, index the bluetooth transmitter so we can compress the system!",
        status: 'Todo',
        priority: 'Medium'
    },
    {
        id: 18,
        taskName: 'TASK-6938',
        taskType: 'Documentation',
        taskTitle: "Use the redundant SCSI application, then you can hack the optical alarm!",
        status: 'Todo',
        priority: 'High'
    },
    {
        id: 19,
        taskName: 'TASK-9885',
        taskType: 'Bug',
        taskTitle: "We need to compress the auxiliary VGA driver!",
        status: 'Backlog',
        priority: 'High'
    },
    {
        id: 20,
        taskName: 'TASK-3216',
        taskType: 'Documentation',
        taskTitle: "Transmitting the transmitter won't do anything, we need to compress the vi...",
        status: 'Backlog',
        priority: 'Medium'
    },
    {
        id: 21,
        taskName: 'TASK-9285',
        taskType: 'Bug',
        taskTitle: "The IP monitor is down, copy the haptic alarm so we can generate the HTTP...",
        status: 'Todo',
        priority: 'High'
    },
    {
        id: 22,
        taskName: 'TASK-1024',
        taskType: 'Documentation',
        taskTitle: "Overriding the microchip won't do anything, we need to transmit the digital...",
        status: 'In Progress',
        priority: 'Low'
    },
    {
        id: 23,
        taskName: 'TASK-7068',
        taskType: 'Bug',
        taskTitle: "You can't generate the capacitor without indexing the wireless HEX pixel!",
        status: 'Canceled',
        priority: 'Low'
    },
    {
        id: 24,
        taskName: 'TASK-6502',
        taskType: 'Bug',
        taskTitle: "Navigating the microchip won't do anything, we need to bypass the back-e...",
        status: 'Todo',
        priority: 'High'
    },
    {
        id: 25,
        taskName: 'TASK-5326',
        taskType: 'Bug',
        taskTitle: "We need to hack the redundant UTF8 transmitter!",
        status: 'Todo',
        priority: 'Low'
    },
    {
        id: 26,
        taskName: 'TASK-6274',
        taskType: 'Documentation',
        taskTitle: "Use the virtual PCI circuit, then you can parse the bluetooth alarm!",
        status: 'Canceled',
        priority: 'Low'
    },
    {
        id: 27,
        taskName: 'TASK-1571',
        taskType: 'Feature',
        taskTitle: "I'll input the neural DRAM circuit, that should protocol the SMTP interface!",
        status: 'In Progress',
        priority: 'Medium'
    },
    {
        id: 28,
        taskName: 'TASK-9518',
        taskType: 'Documentation',
        taskTitle: "Compressing the interface won't do anything, we need to compress the onl...",
        status: 'Canceled',
        priority: 'Medium'
    },
    {
        id: 29,
        taskName: 'TASK-5581',
        taskType: 'Documentation',
        taskTitle: "I'll synthesize the digital COM pixel, that should transmit the UTF8 proto...",
        status: 'Backlog',
        priority: 'High'
    },
    {
        id: 30,
        taskName: 'TASK-2197',
        taskType: 'Documentation',
        taskTitle: "Parsing the feed won't do anything, we need to copy the bluetooth DRAM b...",
        status: 'Todo',
        priority: 'Low'
    },
    {
        id: 31,
        taskName: 'TASK-8484',
        taskType: 'Bug',
        taskTitle: "We need to parse the solid state UDP firewall!",
        status: 'In Progress',
        priority: 'Medium'
    },
    {
        id: 32,
        taskName: 'TASK-9892',
        taskType: 'Documentation',
        taskTitle: "If we back up the application, we can get to the UDP application through the haptic system!",
        status: 'Backlog',
        priority: 'Medium'
    },
    {
        id: 33,
        taskName: 'TASK-9616',
        taskType: 'Feature',
        taskTitle: "We need to synthesize the cross-platform ASCII pixel!",
        status: 'Todo',
        priority: 'High'
    },
    {
        id: 34,
        taskName: 'TASK-9744',
        taskType: 'Documentation',
        taskTitle: "Use the back-end IP card, then you can input the solid state hard drive!",
        status: 'In Progress',
        priority: 'Low'
    },
    {
        id: 35,
        taskName: 'TASK-1376',
        taskType: 'Documentation',
        taskTitle: "Generating the alarm won't do anything, we need to generate the mobile IP card!",
        status: 'Done',
        priority: 'Medium'
    },
    {
        id: 36,
        taskName: 'TASK-7382',
        taskType: 'Feature',
        taskTitle: "If we back up the firewall, we can get to the RAM alarm through the primary API!",
        status: 'Backlog',
        priority: 'Medium'
    },
    {
        id: 37,
        taskName: 'TASK-2290',
        taskType: 'Documentation',
        taskTitle: "I'll compress the virtual JSON panel, that should application the UTF8 bus!",
        status: 'In Progress',
        priority: 'High'
    },
    {
        id: 38,
        taskName: 'TASK-1533',
        taskType: 'Bug',
        taskTitle: "You can't input the firewall without overriding the wireless TCP firewall!",
        status: 'Todo',
        priority: 'Medium'
    },
    {
        id: 39,
        taskName: 'TASK-4920',
        taskType: 'Bug',
        taskTitle: "Bypassing the hard drive won't do anything, we need to input the bluetooth program!",
        status: 'Canceled',
        priority: 'Low'
    },
    {
        id: 40,
        taskName: 'TASK-5168',
        taskType: 'Feature',
        taskTitle: "If we synthesize the bus, we can get to the IP panel through the virtual TLS card!",
        status: 'In Progress',
        priority: 'High'
    },
    {
        id: 41,
        taskName: 'TASK-7103',
        taskType: 'Feature',
        taskTitle: "We need to parse the multi-byte EXE bandwidth!",
        status: 'Backlog',
        priority: 'Medium'
    },
    {
        id: 42,
        taskName: 'TASK-4314',
        taskType: 'Bug',
        taskTitle: "If we compress the program, we can get to the XML alarm through the multi-byte interface!",
        status: 'Todo',
        priority: 'Low'
    },
    {
        id: 43,
        taskName: 'TASK-3415',
        taskType: 'Feature',
        taskTitle: "Use the cross-platform XML application, then you can quantify the solid state monitor!",
        status: 'Done',
        priority: 'Medium'
    },
    {
        id: 44,
        taskName: 'TASK-8339',
        taskType: 'Feature',
        taskTitle: "Try to calculate the DNS interface, maybe it will input the bluetooth capacitor!",
        status: 'In Progress',
        priority: 'High'
    },
    {
        id: 45,
        taskName: 'TASK-6995',
        taskType: 'Feature',
        taskTitle: "Try to hack the XSS bandwidth, maybe it will override the bluetooth matrix!",
        status: 'Backlog',
        priority: 'Medium'
    },
    {
        id: 46,
        taskName: 'TASK-8053',
        taskType: 'Feature',
        taskTitle: "If we connect the program, we can get to the UTF8 matrix through the digital system!",
        status: 'Todo',
        priority: 'Low'
    },
    {
        id: 47,
        taskName: 'TASK-4336',
        taskType: 'Documentation',
        taskTitle: "If we synthesize the microchip, we can get to the SAS sensor through the online firewall!",
        status: 'In Progress',
        priority: 'Medium'
    },
    {
        id: 48,
        taskName: 'TASK-8790',
        taskType: 'Bug',
        taskTitle: "I'll back up the optical COM alarm, that should alarm the RSS capacitor!",
        status: 'Canceled',
        priority: 'High'
    },
    {
        id: 49,
        taskName: 'TASK-8980',
        taskType: 'Bug',
        taskTitle: "Try to navigate the SQL transmitter, maybe it will back up the virtual firewall!",
        status: 'Canceled',
        priority: 'Low'
    },
    {
        id: 50,
        taskName: 'TASK-8981',
        taskType: 'Documentation',
        taskTitle: "Backlog task description",
        status: 'Backlog',
        priority: 'Low'
    },
    {
        id: 51,
        taskName: 'TASK-8980',
        taskType: 'Bug',
        taskTitle: "Try to navigate the SQL transmitter, maybe it will back up the virtual firewall!",
        status: 'Canceled',
        priority: 'Low'
    },
    {
        id: 52,
        taskName: 'TASK-8981',
        taskType: 'Documentation',
        taskTitle: "Backlog task description",
        status: 'Backlog',
        priority: 'Low'
    },
    {
        id: 53,
        taskName: 'TASK-1234',
        taskType: 'Bug',
        taskTitle: "Fix the login authentication issue",
        status: 'In Progress',
        priority: 'High'
    },
    {
        id: 54,
        taskName: 'TASK-5678',
        taskType: 'Feature',
        taskTitle: "Implement user profile editing functionality",
        status: 'Todo',
        priority: 'Medium'
    },
    {
        id: 55,
        taskName: 'TASK-9012',
        taskType: 'Documentation',
        taskTitle: "Update API documentation for new endpoints",
        status: 'Backlog',
        priority: 'Low'
    },
    {
        id: 56,
        taskName: 'TASK-3456',
        taskType: 'Bug',
        taskTitle: "Resolve database connection timeout error",
        status: 'In Progress',
        priority: 'High'
    },
    {
        id: 57,
        taskName: 'TASK-7890',
        taskType: 'Feature',
        taskTitle: "Add dark mode theme option",
        status: 'Todo',
        priority: 'Medium'
    },
    {
        id: 58,
        taskName: 'TASK-2345',
        taskType: 'Documentation',
        taskTitle: "Create user guide for new dashboard",
        status: 'Backlog',
        priority: 'Low'
    },
    {
        id: 59,
        taskName: 'TASK-6789',
        taskType: 'Bug',
        taskTitle: "Fix mobile responsive layout issues",
        status: 'In Progress',
        priority: 'High'
    },
    {
        id: 60,
        taskName: 'TASK-0123',
        taskType: 'Feature',
        taskTitle: "Implement file upload functionality",
        status: 'Todo',
        priority: 'Medium'
    },
    {
        id: 61,
        taskName: 'TASK-4567',
        taskType: 'Documentation',
        taskTitle: "Update deployment procedures",
        status: 'Backlog',
        priority: 'Low'
    },
    {
        id: 62,
        taskName: 'TASK-8901',
        taskType: 'Bug',
        taskTitle: "Resolve cross-browser compatibility issues",
        status: 'In Progress',
        priority: 'High'
    },
    {
        id: 63,
        taskName: 'TASK-1122',
        taskType: 'Bug',
        taskTitle: "Fix the navigation menu alignment issue on mobile devices",
        status: 'In Progress',
        priority: 'High'
    },
    {
        id: 64,
        taskName: 'TASK-3344',
        taskType: 'Feature',
        taskTitle: "Add social media sharing functionality to blog posts",
        status: 'Todo',
        priority: 'Medium'
    },
    {
        id: 65,
        taskName: 'TASK-5566',
        taskType: 'Documentation',
        taskTitle: "Create API documentation for the new payment gateway integration",
        status: 'Backlog',
        priority: 'Low'
    },
    {
        id: 66,
        taskName: 'TASK-7788',
        taskType: 'Bug',
        taskTitle: "Resolve image loading performance issues in the gallery",
        status: 'In Progress',
        priority: 'High'
    },
    {
        id: 67,
        taskName: 'TASK-9900',
        taskType: 'Feature',
        taskTitle: "Implement two-factor authentication for user accounts",
        status: 'Todo',
        priority: 'Medium'
    },
    {
        id: 68,
        taskName: 'TASK-1123',
        taskType: 'Documentation',
        taskTitle: "Update user manual with new features and improvements",
        status: 'Backlog',
        priority: 'Low'
    },
    {
        id: 69,
        taskName: 'TASK-4455',
        taskType: 'Bug',
        taskTitle: "Fix form validation errors in the contact page",
        status: 'In Progress',
        priority: 'High'
    },
    {
        id: 70,
        taskName: 'TASK-6677',
        taskType: 'Feature',
        taskTitle: "Add advanced search filters to the product catalog",
        status: 'Todo',
        priority: 'Medium'
    },
    {
        id: 71,
        taskName: 'TASK-8899',
        taskType: 'Documentation',
        taskTitle: "Document the new database migration process",
        status: 'Backlog',
        priority: 'Low'
    },
    {
        id: 72,
        taskName: 'TASK-0011',
        taskType: 'Bug',
        taskTitle: "Resolve cookie consent banner display issues in Safari",
        status: 'In Progress',
        priority: 'High'
    },
    {
        id: 73,
        taskName: 'TASK-2233',
        taskType: 'Feature',
        taskTitle: "Implement real-time notifications system",
        status: 'Todo',
        priority: 'Medium'
    },
    {
        id: 74,
        taskName: 'TASK-4456',
        taskType: 'Documentation',
        taskTitle: "Create setup guide for new development environment",
        status: 'Backlog',
        priority: 'Low'
    },
    {
        id: 75,
        taskName: 'TASK-6678',
        taskType: 'Bug',
        taskTitle: "Fix memory leak in the image processing module",
        status: 'In Progress',
        priority: 'High'
    },
    {
        id: 76,
        taskName: 'TASK-8890',
        taskType: 'Feature',
        taskTitle: "Add user role-based access control system",
        status: 'Todo',
        priority: 'Medium'
    },
    {
        id: 77,
        taskName: 'TASK-0012',
        taskType: 'Documentation',
        taskTitle: "Update API versioning and deprecation policy",
        status: 'Backlog',
        priority: 'Low'
    },
    {
        id: 78,
        taskName: 'TASK-3345',
        taskType: 'Bug',
        taskTitle: "Fix SSL certificate validation errors",
        status: 'In Progress',
        priority: 'High'
    },
    {
        id: 79,
        taskName: 'TASK-5567',
        taskType: 'Feature',
        taskTitle: "Implement data export functionality",
        status: 'Todo',
        priority: 'Medium'
    },
    {
        id: 80,
        taskName: 'TASK-7789',
        taskType: 'Documentation',
        taskTitle: "Create troubleshooting guide for common issues",
        status: 'Backlog',
        priority: 'Low'
    },
    {
        id: 81,
        taskName: 'TASK-9901',
        taskType: 'Bug',
        taskTitle: "Resolve caching issues with dynamic content",
        status: 'In Progress',
        priority: 'High'
    },
    {
        id: 82,
        taskName: 'TASK-1124',
        taskType: 'Feature',
        taskTitle: "Add multi-language support to the application",
        status: 'Todo',
        priority: 'Medium'
    },
    {
        id: 83,
        taskName: 'TASK-3346',
        taskType: 'Documentation',
        taskTitle: "Update security best practices documentation",
        status: 'Backlog',
        priority: 'Low'
    },
    {
        id: 84,
        taskName: 'TASK-5568',
        taskType: 'Bug',
        taskTitle: "Fix performance issues with large datasets",
        status: 'In Progress',
        priority: 'High'
    },
    {
        id: 85,
        taskName: 'TASK-7790',
        taskType: 'Feature',
        taskTitle: "Implement automated backup system",
        status: 'Todo',
        priority: 'Medium'
    },
    {
        id: 86,
        taskName: 'TASK-9902',
        taskType: 'Documentation',
        taskTitle: "Create API rate limiting documentation",
        status: 'Backlog',
        priority: 'Low'
    },
    {
        id: 87,
        taskName: 'TASK-1125',
        taskType: 'Bug',
        taskTitle: "Resolve timezone handling issues",
        status: 'In Progress',
        priority: 'High'
    },
    {
        id: 88,
        taskName: 'TASK-3347',
        taskType: 'Feature',
        taskTitle: "Add user activity tracking and analytics",
        status: 'Todo',
        priority: 'Medium'
    },
    {
        id: 89,
        taskName: 'TASK-5569',
        taskType: 'Documentation',
        taskTitle: "Update code style guide and conventions",
        status: 'Backlog',
        priority: 'Low'
    },
    {
        id: 90,
        taskName: 'TASK-7791',
        taskType: 'Bug',
        taskTitle: "Fix email notification delivery issues",
        status: 'In Progress',
        priority: 'High'
    },
    {
        id: 91,
        taskName: 'TASK-9903',
        taskType: 'Feature',
        taskTitle: "Implement bulk operations for user management",
        status: 'Todo',
        priority: 'Medium'
    },
    {
        id: 92,
        taskName: 'TASK-1126',
        taskType: 'Documentation',
        taskTitle: "Create deployment checklist for production",
        status: 'Backlog',
        priority: 'Low'
    },
    {
        id: 93,
        taskName: 'TASK-3348',
        taskType: 'Bug',
        taskTitle: "Resolve session management vulnerabilities",
        status: 'In Progress',
        priority: 'High'
    },
    {
        id: 94,
        taskName: 'TASK-5570',
        taskType: 'Feature',
        taskTitle: "Add customizable user dashboard widgets",
        status: 'Todo',
        priority: 'Medium'
    },
    {
        id: 95,
        taskName: 'TASK-7792',
        taskType: 'Documentation',
        taskTitle: "Update third-party integration guidelines",
        status: 'Backlog',
        priority: 'Low'
    },
    {
        id: 96,
        taskName: 'TASK-9904',
        taskType: 'Bug',
        taskTitle: "Fix accessibility issues for screen readers",
        status: 'In Progress',
        priority: 'High'
    },
    {
        id: 97,
        taskName: 'TASK-1127',
        taskType: 'Feature',
        taskTitle: "Implement data visualization charts",
        status: 'Todo',
        priority: 'Medium'
    },
    {
        id: 98,
        taskName: 'TASK-3349',
        taskType: 'Documentation',
        taskTitle: "Create performance optimization guide",
        status: 'Backlog',
        priority: 'Low'
    },
    {
        id: 99,
        taskName: 'TASK-5571',
        taskType: 'Bug',
        taskTitle: "Resolve database deadlock issues",
        status: 'In Progress',
        priority: 'High'
    },
    {
        id: 100,
        taskName: 'TASK-7793',
        taskType: 'Feature',
        taskTitle: "Add keyboard shortcuts for power users",
        status: 'Todo',
        priority: 'Medium'
    }
]
</script>