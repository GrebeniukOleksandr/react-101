export default function OfficerProfile({officer: {name, age, specialization, status}}) {
    return  (
        <div>
        <p>name: {name} </p>
        <p>Age: {age}</p>
        <p>Status: {status === 'Active' ? "Is active" : "Is retired"}</p>
        <p>specialization: {specialization}</p>
        </div>
    )
};
