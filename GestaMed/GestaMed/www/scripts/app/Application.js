var app;
function Application()
{
    app = this;
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
                document.getElementById("searchResults").setAttribute("hidden", true);
                return;
            }

            if (length == 1)
            {
                document.getElementById("drugInfoBox").removeAttribute("hidden");
                document.getElementById("helpBox").setAttribute("hidden", true);
                document.getElementById("errorBox").setAttribute("hidden", true);
                document.getElementById("searchResults").setAttribute("hidden", true);

                document.getElementById("drugName").innerHTML = Application.formDrugName(docs[0].Name);

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
                return;
            }

            else
            {
                document.getElementById("searchResults").removeAttribute("hidden");
                document.getElementById("helpBox").setAttribute("hidden", true);
                document.getElementById("errorBox").setAttribute("hidden", true);
                document.getElementById("drugInfoBox").setAttribute("hidden", true);

                var searchResults = document.getElementById("searchResults");
                searchResults.innerHTML = "";
                
                for (var i = 0; i < length; ++i)
                {
                    var button = document.createElement("button");
                    button.id = "searchResult" + i;
                    button.type = "button";
                    button.className = "btn btn-block btn-primary";
                    button.innerHTML = Application.formDrugName(docs[i].Name);
                    button.onclick = function (event) {
                        var clickedButton = document.elementFromPoint(event.clientX, event.clientY);
                        app.searchDrug(clickedButton.innerHTML);
                    };

                    var li = document.createElement("li");
                    li.appendChild(button);

                    searchResults.appendChild(li);
                }
            }
        },
        function(err)
        {
            console.log(err);
        }
        );
};

Application.formDrugName = function (name) {
    if (name === "")
        return name;

    return name.charAt(0).toUpperCase() + name.slice(1);
};