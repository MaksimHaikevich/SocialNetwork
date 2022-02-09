import React, { useEffect, useState } from "react";

export const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, []);

  const onEditMode = () => setEditMode(true);
  const offEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={onEditMode}>
            {props.status || "Пустой статус"}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            onChange={onStatusChange}
            onBlur={offEditMode}
            autoFocus={true}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

