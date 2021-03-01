import { DataGrid } from "@material-ui/data-grid";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getAllProjects } from "../helpers/WebApi";

const ProjectList = (props) => {
  const history = useHistory();

  const columns = [
    { field: "title", headerName: "Project Title", width: 1000 },
  ];

  const [displayList, setDisplayList] = useState([
    { id: 0, title: "loading..." },
  ]);

  useEffect(() => {
    getAllProjects().then((resp) =>
      setDisplayList(
        resp.projects.map((project) => {
          return { id: project.id, title: project.title, _id: project._id };
        })
      )
    );
  }, []);

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
