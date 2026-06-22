import type { IBookHistory } from "../../types/reader.types";
import { mockBooks } from "../../mocks/books";

interface HistoryProps {
    history: IBookHistory[];
}


const HistorySection = ({history}: HistoryProps) => {
    return(
        <section className="profile-section">
            <h2 className="profile-section-title">История чтения</h2>
            <div className="histori-list">
                {history.map(book=>{
                    const returnedAt = book.returnedAt
                    ? `Возвращена ${book.takenAt.toLocaleDateString("ru-Ru")}`
                    : `(активна)`;
                    const title = mockBooks.find((mockBook)=>{
                        return book.bookId === mockBook.id;
                    })

                    const title = findBook ? findBook.title : '';
                    return(
                        <div className="history-item">
                            <span className="history-book">{title}</span>
                            <span className="history-date">
                                Взята: {book.takenAt.toLocaleDateString('ru-Ru')}, {returnedAt}
                            </span>
                        </div>
                        )




                })}
            </div>


        </section>
    )
}
export default HistorySection