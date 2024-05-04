function VacancyItem({ vacancy }) {
    return (
        <article className="job-card">
            <h3 className="job-title">{vacancy.name}</h3>
            <p className="job-company">{vacancy.company}</p>
            <strong className="job-city">{vacancy.city}</strong>
            <span className="job-experience">{vacancy.experience}</span>
            <button className="button is-primary">Смотреть</button>
        </article>
    );
}

export default VacancyItem;