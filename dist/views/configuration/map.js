function (doc) {
    if (doc.type && doc.type === 'configuration') {
        emit(doc.organization, null);
    }
}