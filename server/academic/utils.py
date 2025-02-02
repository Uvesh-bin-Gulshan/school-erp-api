def generate_custom_id(model, prefix='PREFIX'):
    last_record = model.objects.order_by('-pk').first()
    if last_record and last_record.pk.isdigit():
        last_id = int(last_record.pk)
        new_id = last_id + 1
        con_id = str(new_id).zfill(2)  # Ensure the ID has leading zeros for fixed length
    else:
        new_id = 1
        con_id = str(new_id).zfill(2)
    return f'{prefix}-{con_id}'
