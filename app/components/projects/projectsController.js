app.controller("projectsController", function($scope) {

    $scope.setNavbar = function() {
        $("#navHome").removeClass("active");
        $("#navProjects").addClass("active");
    }

    var buttonIds = ["btnAll", "btnAccenture", "btnAmeren", "btnTrue", "btnInd"];

    $("#buttons > a").on("click", function () {
        console.log(this.id + " Clicked");
        for(var i = 0; i < buttonIds.length; i++) {
            var id = buttonIds[i];
            if (id == this.id) {
                $(`#${id}`).addClass("btn-success");
            } else {
                $(`#${id}`).removeClass("btn-success");
                $(`#${id}`).addClass("btn-primary");
            }
        };
    })

    $scope.accentureBio = [];

    $scope.amerenBio = [
        "At Ameren, I worked in a few different areas. I started out in Performance Analytics and Reporting, creating KPI dashboards for the ITSM team and anyone else who requested any type of reports or dashboards.",
        "After working in ServiceNow for a few months, I started getting more interested in the platform itself. I was given the opportunity to work on redesigning Ameren's Self-Service Portal, which drew me into ServiceNow development. I have now earned my ServiceNow Certified System Administrator Certification."
    ];

    $scope.trueBio = ["At True, I worked as a Co-op Developer creating dashboard applications in the Epicor ERP with C# and SQL. I learned a lot about professional software development and Agile in this co-op."];

    $scope.indBio = ["My independent projects have quite a bit of variety. I learn best by doing. So, any time I find a new tool or framework, I like to try to get straight into it and start making things."];

    $scope.accentureProjects = [];

    $scope.amerenProjects = [
        { 
            name: "ServiceNow Self-Service Portal Redesign (AngularJS)", 
            desc: ["I am working with the service catalog manager and UX team to update Ameren's ServiceNow Self-Service Portal.",
            "My responsibilies on this project include researching the capabilities of the portal and building a functional prototype in ServiceNow using HTML, CSS and AngularJS, and deploying updates to the production environment through change management."]
        },
        { 
            name: "ServiceNow KPI Dashboards", 
            desc: ["A big part of my co-op with Ameren involves creating and maintaining KPIs and dashboards for the IT Service Management team. I use ServiceNow Performance Analytics and Reports to collect data on Key Performance Indicators to help the ITSM Process Managers see metrics on their areas, and allow other people, such as assignment group managers, directors, and VPs, see how their team is affecting those KPIs."]
        },
        {
            name: "ServiceNow CMDB Cleanup Initiatives",
            desc: ["I have been invloved in several data cleanup initiatives in the ServiceNow Configuration Management Database.",
            "Ameren has a lot of integrations connected to ServiceNow, and sometimes things get messed up and cause duplicate records to be created. We use the ServiceNow GUI as well as an Oracle database instance to analyze this data and determine which records should be deleted. Then, we work with our ServiceNow developer team to look into the integration and determine what is causing the duplicate records to be created, so that it can be corrected."]
        },
        {
            name: "ITSM SharePoint Site / Digital Asset Management Sub-site",
            desc: ["I worked with the ITSM process managers to create an informational company-facing SharePoint site, and now maintain that site. The managers upload relevant documents to their parts of the page.",
            "I also created a subsite for the DAM project, which involves discovery and service mapping."]
        }
    ]

    $scope.trueProjects = [
        {
            name: "Epicor ERP Super Order Tracker Dashboard (C#, SQL)",
            desc: ["Super Order Tracker is an Epicor ERP dashboard created with C# and SQL that retrieves information about customer orders to allow the customer service department to easily track customer orders and invoices.",
            "The dashboard runs a parameterized SQL script, that allow filters on several fields with C# form controls.The dashboard consists of a table view of all orders and several filters that can be applied to narrow searches down. I created the data query with Epicor's BAQ builder and SQL, and called the query in the C# code behind the dashboard. I also got experience going through all the stages of the agile process and working with the business to determine requirements"]
        },
        {
            name: "Invoice Import SQL Script (MS SQL Server, SQL Server Management Studio)",
            desc: ["Another project that I worked on at True was creating a SQL script to import invoice information into the Epicor database",
            "There were a few thousand invoices that had not been recorded in the database that needed to be imported. The requestor compiled all of the needed information and put it into an excel spreadsheet, which I was able to import into a temporary table so that I could analyze the data and insert the fields on the sheet to their appropriate table and field in the database while making sure there were no duplicates inserted."]
        }
    ]

    $scope.personalProjects = [
        {
            name: "This Website (AngularJS)",
            desc: ["I develop and maintain this website myself with HTML, CSS, AngularJS, and jQuery. I am constantly improving this site."]
            //,images: ["assets/img/pmm/0.png", "assets/img/pmm/1.png", "assets/img/pmm/2.png", "assets/img/pmm/3.png", "assets/img/pmm/4.png"]
        },
        {
            name: "My Project Tracker (AngularJS)",
            desc: ["My Project Tracker is a database driven AngularJS Single-Page-Application that I created to keep track of the different projects that I am working on for both work and school."]
        },
        {
            name: "Customer Management (JavaFX, MySQL)",
            desc: ["Customer Management is a simple database driven JavaFX app that I built in order to learn the basics of JavaFX and JDBC. I also created a CSV version to refresh on file IO in Java."]
        },
        {
            name: "Sales Database GUI (C#, Microsoft SQL Server)",
            desc: ["Sales Database GUI is a Windows Forms app created in C# to manage an Microsoft SQL Server database. The database has four tables: customer, item, order, and order_item. It allows for creating, updating, and deleting customers, items, and orders."]
        },
        {
            name: "Parking Member Management (HTML, CSS, jQuery, PHP, MySQL",
            desc: ["Parking Member Management is a database driven web app developed as school project. The concept is that a company could use the app to manage permits and vehicles for a parking lot/garage."]
        },
        {
            name: "Inventory Management System (C++)",
            desc: ["Inventory Management System is a command line program written in C++ to perform adminstrative functions to a list of items. It reads a file to generate a list of items, some of which have special restrictions such as a minimum purchaser age. It also allows the user to edit the inventory file and save an updated version of it."]
        },
        {
            name: "POS System (C++)",
            desc: ["POS System is a program based on Inventory System that processes transactions and maintains a perpetual inventory system by updating the count of each item sold once the transaction has been completed."]
        },
        {
            name: "Gibberish Generator (C++)",
            desc: ["Gibberish Generator is a small utility program created to quickly generate input files composed of random characters and numbers for testing other programs. It was created to save time creating items to test Inventory Management System and POS System."]
        },
        {
            name: "Battleship (Java)",
            desc: ["Battleship is a simple command-line battleship game that uses characters to represent spaces on the board."]
        }
    ]

    // AngularJS + jQuery methods

    $scope.showAllProjects = function() {
        $("#divAccenture").show();
        $("#divAmeren").show();
        $("#divTrue").show();
        $("#divInd").show();
    }

    $scope.showAccentureProjects = function() {
        $("#divAccenture").show();
        $("#divAmeren").hide();
        $("#divTrue").hide();
        $("#divInd").hide();
    }

    $scope.showAmerenProjects = function() {
        $("#divAccenture").hide();
        $("#divAmeren").show();
        $("#divTrue").hide();
        $("#divInd").hide();
    }

    $scope.showTrueProjects = function() {
        $("#divAccenture").hide();
        $("#divAmeren").hide();
        $("#divTrue").show();
        $("#divInd").hide();
    }

    $scope.showIndProjects = function() {
        $("#divAccenture").hide();
        $("#divAmeren").hide();
        $("#divTrue").hide();
        $("#divInd").show();
    }
});