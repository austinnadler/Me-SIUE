app.controller("projectsController", function ($scope) {

    $("#navHome").removeClass("active");
    $("#navProjects").addClass("active");
    $("#navExtras").removeClass("active");

    // Data

    $scope.companies = [
        {
            id: "Accenture",
            name: "Accenture Federal Services",
            image: "accenture_logo.png",
            bio: [
                "I have not yet been assigned to a project at AFS"
            ],
            projects: []
        },
        {
            id: "Ameren",
            name: "Ameren",
            image: "ameren_logo.png",
            bio: [
                "At Ameren, I worked in a few different areas. I started out in Performance Analytics and Reporting, creating KPI dashboards for the ITSM team and anyone else who requested any type of reports or dashboards.",
                "After working in ServiceNow for a few months, I started getting more interested in the platform itself. I was given the opportunity to work on redesigning Ameren's Self-Service Portal, which drew me into ServiceNow development. I have now earned my ServiceNow Certified System Administrator Certification."
            ],
            projects: [
                {
                    name: "ServiceNow Self-Service Portal Redesign (AngularJS)",
                    description: ["I worked with the service catalog manager and UX team to update Ameren's ServiceNow Self-Service Portal.",
                        "My responsibilies on this project included researching the capabilities of the portal and building a functional prototype in ServiceNow using HTML, CSS and AngularJS, and deploying updates to the production environment through change management.",
                        "I built a few really cool widgets, including one to present a service catalog with a group of cards representing categories, with subcategories liseted below with dropdowns linking to popular catalog items. Another widget I built brought approvals to the service portal, and allowed approvers to view important information on the records being approved and approve or reject them directly from the portal home page."
                    ]
                },
                {
                    name: "ServiceNow KPI Dashboards",
                    description: ["A big part of my co-op with Ameren involved creating and maintaining KPIs and dashboards for the IT Service Management team. I used ServiceNow Performance Analytics and Reports to collect data on Key Performance Indicators to help the ITSM Process Managers see metrics on their areas, and allow other people, such as assignment group managers, directors, and VPs, see how their team is affecting those KPIs."]
                },
                {
                    name: "ServiceNow CMDB Cleanup Initiatives",
                    description: ["I was involved in several data cleanup initiatives in the ServiceNow Configuration Management Database.",
                        "Ameren has a lot of integrations connected to ServiceNow, and sometimes things get messed up and cause duplicate records to be created. We used the ServiceNow GUI as well as an Oracle database instance to analyze this data and determine which records should be deleted. Then, we worked with the appropriate team(s) to look into the integration and determine what was causing the duplicate records to be created, so that it could be corrected."]
                },
                {
                    name: "ITSM SharePoint Site / Digital Asset Management Sub-site",
                    description: ["I worked with the ITSM process managers to create an informational company-facing SharePoint site for the team.",
                        "I also created a subsite for a specific project that was big enough to warrant it's own dedicated site for special announcements, training, and documentation."]
                }
            ]
        },
        {
            id: "True",
            name: "True Manufacturing",
            image: "truemfg_logo.png",
            bio: ["At True, I worked as a Co-op Developer creating dashboard applications in the Epicor ERP with C# and SQL. I learned a lot about professional software development and Agile in this co-op."],
            projects: [
                {
                    name: "Epicor ERP Super Order Tracker Dashboard (C#, SQL)",
                    description: ["Super Order Tracker is an Epicor ERP dashboard created with C# and SQL that retrieves information about customer orders to allow the customer service department to easily track customer orders and invoices.",
                        "The dashboard runs a parameterized SQL script, that allow filters on several fields with C# form controls.The dashboard consists of a table view of all orders and several filters that can be applied to narrow searches down. I created the data query with Epicor's BAQ builder and SQL, and called the query in the C# code behind the dashboard. I also got experience going through all the stages of the agile process and working with the business to determine requirements"]
                },
                {
                    name: "Invoice Import SQL Script (MS SQL Server, SQL Server Management Studio)",
                    description: ["Another project that I worked on at True was creating a SQL script to import invoice information into the Epicor database",
                        "There were a few thousand invoices that had not been recorded in the database that needed to be imported. The requestor compiled all of the needed information and put it into an excel spreadsheet, which I was able to import into a temporary table so that I could analyze the data and insert the fields on the sheet to their appropriate table and field in the database while making sure there were no duplicates inserted."]
                }
            ]
        },
        {
            id: "Ind",
            name: "Independent",
            bio: ["My independent projects have quite a bit of variety. I learn best by doing. So, any time I find a new tool or framework, I like to try to get straight into it and start making things."],
            projects: [
                {
                    name: "This Website (AngularJS)",
                    description: ["I develop and maintain this website myself with HTML, CSS, Bootstrap, AngularJS, and jQuery. I am constantly improving this site."],
                    link: "https://github.com/austinnadler/Me-SIUE"
                },
                {
                    name: "My Project Tracker (AngularJS)",
                    description: ["My Project Tracker is a database driven AngularJS Single-Page-Application that I created to keep track of the different projects that I am working on for both work and school."],
                    link: "https://github.com/austinnadler/MyProjectTracker-AngularJS"
                },
                {
                    name: "Customer Management (JavaFX, MySQL)",
                    description: ["Customer Management is a simple database driven JavaFX app that I built in order to learn the basics of JavaFX and JDBC. I also created a CSV version to refresh on file IO in Java."],
                    link: "https://github.com/austinnadler/JavaFX-Customer-Management"
                },
                {
                    name: "Sales Database GUI (C#, Microsoft SQL Server)",
                    description: ["Sales Database GUI is a Windows Forms app created in C# to manage an Microsoft SQL Server database. The database has four tables: customer, item, order, and order_item. It allows for creating, updating, and deleting customers, items, and orders."],
                    link: "https://github.com/austinnadler/StoreDatabaseGUI"
                    
                },
                {
                    name: "Parking Member Management (HTML, CSS, jQuery, PHP, MySQL",
                    description: ["Parking Member Management is a database driven web app developed as school project. The concept is that a company could use the app to manage permits and vehicles for a parking lot/garage."],
                    link: "https://github.com/austinnadler/Parking-Member-Management"
                },
                {
                    name: "Inventory Management System (C++)",
                    description: ["Inventory Management System is a command line program written in C++ to perform adminstrative functions to a list of items. It reads a file to generate a list of items, some of which have special restrictions such as a minimum purchaser age. It also allows the user to edit the inventory file and save an updated version of it."],
                    link: "https://github.com/austinnadler/Inventory-Management-System"
                },
                {
                    name: "POS System (C++)",
                    description: ["POS System is a program based on Inventory System that processes transactions and maintains a perpetual inventory system by updating the count of each item sold once the transaction has been completed."],
                    link: "https://github.com/austinnadler/POS-System"
                },
                {
                    name: "Gibberish Generator (C++)",
                    description: ["Gibberish Generator is a small utility program created to quickly generate input files composed of random characters and numbers for testing other programs. It was created to save time creating items to test Inventory Management System and POS System."],
                    link: "https://github.com/austinnadler/GibberishGenerator"
                },
                {
                    name: "Battleship (Java)",
                    description: ["Battleship is a simple command-line battleship game that uses characters to represent spaces on the board."],
                    link: "https://github.com/austinnadler/Command-Battleship"
                }
            ]
        }
    ];

    // Functions

    // Set the dropdown text to the selected copmany name, show that groups div and hide others
    $scope.showProjects = function (groupId, groupName) {
        $("#filter").text(groupName);
        $(`#div${groupId}`).show();
        for (var i = 0; i < $scope.companies.length; i++) {
            var c = $scope.companies[i];
            if (c.id != groupId) {
                $(`#div${c.id}`).hide();
            }
        }
    }

    // Set dropdown text to "All", show all groups divs
    $scope.showAllProjects = function () {
        $("#filter").text("All");
        for (var i = 0; i < $scope.companies.length; i++) {
            var c = $scope.companies[i];
            $(`#div${c.id}`).show();
        }
    }

});
