import connection from "@/lib/mysql";

const rows = await connection.query("SELECT * FROM alumnos");

export default function AlumnosDb() {
    return (
    <>
        <i className="fa fa-user p-4" aria-hidden="true"></i> ALUMNOS
        <div className="p-4 flex flex-col gap-4">
          {rows[0].map(alumno => <p key={alumno.id}>{alumno.nombre}</p>)}
        </div>
      </>
    );
}