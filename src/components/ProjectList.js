import { DataGrid } from "@material-ui/data-grid";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getProject } from "../helpers/WebApi";

const ProjectList = (props) => {
  const user = useSelector((state) => state.user);
  const history = useHistory();

  const columns = [
    { field: "title", headerName: "Project Title", width: 1000 },
  ];

  const [displayList, setDisplayList] = useState([
    { id: 0, title: "loading..." },
  ]);

  useEffect(() => {
    if (user.projects) {
      console.log(typeof user.projects);
      const promises = user.projects.map((id) => getProject(id));
      Promise.all(promises)
        .then((values) =>
          setDisplayList(
            values.map((resp, idx) => {
              return {
                id: idx,
                title: resp.project.name,
                _id: resp.project._id,
              };
            })
          )
        )
        .catch((err) => console.log(err));
    }
  }, [user]);

  const handleRowClick = (e) => {
    history.push(`/project/${e.row._id}`);
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        onRowClick={handleRowClick}
        rows={displayList}
        columns={columns}
        pageSize={5}
      />
    </div>
  );
};

export default ProjectList;
