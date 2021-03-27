app.controller("projectsController", function($scope) {

    if(isMobile()) {
        console.log("Mobile device detected");
    } else {
        console.log("Desktop device detected");
    }

    function isMobile() {
        let isMobile = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
        return isMobile;
    };

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
            name: "This Website",
            desc: ["I develop and maintain this website myself with HTML, CSS, AngularJS, and jQuery."]
            //,images: ["assets/img/pmm/0.png", "assets/img/pmm/1.png", "assets/img/pmm/2.png", "assets/img/pmm/3.png", "assets/img/pmm/4.png"]
        },
        {
            name: "ServiceNow Scripting in PDI",
            desc: ["Working at Ameren got me interesting in the ServiceNow platform. I have a personal developer instance (PDI) in which I practice with scripting things like Business Rules, UI Policies, UI Actions etc.",
            "I use this instance to show possible solutions to problems brought up by my ITSM managers at Ameren. Eventually, I hope to be a full-time ServiceNow developer."]
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
        $("#divAmeren").show();
        $("#divTrue").show();
        $("#divInd").show();

        $("#btnAll").css("background-color", "green");
        $("#btnAmeren").css("background-color", "#0099ff");
        $("#btnTrue").css("background-color", "#0099ff");
        $("#btnInd").css("background-color", "#0099ff");
    }

    $scope.showAmerenProjects = function() {
        $("#divAmeren").show();
        $("#divTrue").hide();
        $("#divInd").hide();

        $("#btnAll").css("background-color", "#0099ff");
        $("#btnAmeren").css("background-color", "green");
        $("#btnTrue").css("background-color", "#0099ff");
        $("#btnInd").css("background-color", "#0099ff");
    }

    $scope.showTrueProjects = function() {
        $("#divAmeren").hide();
        $("#divTrue").show();
        $("#divInd").hide();

        $("#btnAll").css("background-color", "#0099ff");
        $("#btnAmeren").css("background-color", "#0099ff");
        $("#btnTrue").css("background-color", "green");
        $("#btnInd").css("background-color", "#0099ff");
    }

    $scope.showIndProjects = function() {
        $("#divAmeren").hide();
        $("#divTrue").hide();
        $("#divInd").show();

        $("#btnAll").css("background-color", "#0099ff");
        $("#btnAmeren").css("background-color", "#0099ff");
        $("#btnTrue").css("background-color", "#0099ff");
        $("#btnInd").css("background-color", "green");
    }
});