function Application()
{
    this.initialize();
}

Application.prototype.initialize = function () {
    this.database = new Database("AppDB");
};

Application.prototype.searchDrug = function (searchString) {
    this.database.searchDrug(searchString,
        function(docs)
        {
            var length = docs.length;
            if (length == 0)
            {
                document.getElementById("errorBox").removeAttribute("hidden");
                document.getElementById("helpBox").setAttribute("hidden", true);
                document.getElementById("drugInfoBox").setAttribute("hidden", true);
                return;
            }

            if (length == 1)
            {
                document.getElementById("drugInfoBox").removeAttribute("hidden");
                document.getElementById("helpBox").setAttribute("hidden", true);
                document.getElementById("errorBox").setAttribute("hidden", true);

                document.getElementById("drugName").innerHTML = docs[0].Name;

                var groupsHTML = "";
                var groups = docs[0].Group;
                for (var i = 0; i < groups.length; i++)
                    groupsHTML += groups[i] + " ";

                document.getElementById("drugGroups").innerHTML = groupsHTML;

                var category = docs[0].FDACategory;
                var drugFDACategoryDiv = document.getElementById("drugFDACatagoryDiv");
                document.getElementById("drugFDACategory").innerHTML = category;
                if (category === "A" || category === "B")
                {
                    drugFDACategoryDiv.className = "btn btn-success btn-flat";
                }
                else if (category === "C")
                {
                    drugFDACategoryDiv.className = "btn btn-warning btn-flat";
                }
                else if (category === "D" || category === "X")
                {
                    drugFDACategoryDiv.className = "btn btn-danger btn-flat";
                }

                document.getElementById("drugDescription").innerHTML = docs[0].OtherInfo;
            }

            else
            {

            }
        },
        function(err)
        {
            console.log(err);
        }
        );
};