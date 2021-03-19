

function AddOperationForm() {
    return(
        <div>
            <select name="OperationType">
                <option value="true">Gasto</option>
                <option value="false">Ingreso</option>
            </select>
            <label>
                <input type="type" value="" ></input>
            </label>
        </div>
    )
}

export default AddOperationForm;